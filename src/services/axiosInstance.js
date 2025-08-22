// services/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// قبل از هر درخواست، هدر Authorization رو اضافه کن
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token"); // ✅ از کوکی بخون
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
