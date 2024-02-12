import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  const tokenValue = value.replace("Bearer ", "");
  console.log(tokenValue);
  return cookies.set(name, tokenValue, { ...option });
};

export const getCookie = (name) => {
  const cookieValue = cookies.get(name);
  console.log(cookieValue);
  return cookieValue;
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};
