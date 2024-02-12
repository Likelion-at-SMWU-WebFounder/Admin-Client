import axios from "axios";
import { getCookie, setCookie, removeCookie } from "./cookie";

const baseUrl = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const statusCode = error.response?.status;
    console.log("statusCode", statusCode);
    if (statusCode == 401 || statusCode === 403) {
      try {
        const refreshToken = getCookie("refreshToken");
        if (!refreshToken) {
          removeCookie("accessToken");
          return Promise.reject(error);
        }
        console.log("refreshToken", refreshToken);
        const refreshResponse = await axios.post(
          "http://localhost:8080/api/admin/reissue",
          null,
          {
            params: {
              accountId: "1",
              token: refreshToken,
            },
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        console.log("newAccessToken", refreshResponse);
        console.log("newAccessTokend", refreshResponse.data.result.accessToken);

        const newAccessToken = refreshResponse.data.result.accessToken;
        setCookie("accessToken", newAccessToken, {
          path: "/",
          secure: true,
        });
        setCookie("refreshToken", refreshResponse.data.result.refreshToken, {
          path: "/",
          secure: true,
        });

        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        return axios(error.config);
      } catch (err) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
