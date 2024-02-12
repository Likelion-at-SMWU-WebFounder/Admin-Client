import axios from "axios";
import { getCookie } from "./cookie";

const baseUrl = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
});

export default axiosInstance;
