import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // آدرس اصلی API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // ماکسیمم زمان انتظار ۵ ثانیه
});

// اینترسپتور برای مدیریت Token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // یا هر جایی که ذخیره کردی
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
