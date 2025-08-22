import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // آدرس اصلی API
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NTUzMzI0NTkzNDEiLCJ1c2VybmFtZSI6Imhvc3NlaW4iLCJpYXQiOjE3NTU4NTYxODMsImV4cCI6MTc1NTg1OTc4M30.IMqT-5Jp1_ZVOOgnZ0l5dyCW0MLFYKuQnOh3lAXIJbg`
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
