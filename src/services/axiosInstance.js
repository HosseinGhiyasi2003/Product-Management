import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // آدرس اصلی API
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NTUzMzI0NTkzNDEiLCJ1c2VybmFtZSI6Imhvc3NlaW4iLCJpYXQiOjE3NTUzNDI4NzAsImV4cCI6MTc1NTM0NjQ3MH0.2Ic1S9QTe_KlPqKVk70QHxc8MerTsknvseMFJAaq3Ao`
  },
  timeout: 5000, // ماکسیمم زمان انتظار ۵ ثانیه
});

// اینترسپتور برای مدیریت Token
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // یا هر جایی که ذخیره کردی
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance;
