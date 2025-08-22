import axiosInstance from "./axiosInstance";

// 📌 ثبت‌نام کاربر جدید
export const registerUser = async (userData) => {
  try {
    const res = await axiosInstance.post("/auth/register", {
      username: userData.username,
      password: userData.password,
    });
    return res.data; // مثلا { message: "ثبت‌نام موفق بود" }
  } catch (err) {
    throw err.response?.data || { message: "خطای ناشناخته هنگام ثبت‌نام" };
  }
};

// 📌 ورود کاربر
export const loginUser = async (userData) => {
  try {
    const res = await axiosInstance.post(
      "/auth/login",
      {
        username: userData.username,
        password: userData.password,
      },
      { withCredentials: true } // ✅ ست شدن کوکی سمت کلاینت
    );

    return res.data; // مثلا { message: "ورود موفق بود", token: "..."}
  } catch (err) {
    throw err.response?.data || { message: "خطای ناشناخته هنگام ورود" };
  }
};

// 📌 گرفتن اطلاعات کاربر لاگین شده (با کوکی JWT)
export const getCurrentUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me", { withCredentials: true });
    return res.data; // مثلا { id: 1, username: "milad" }
  } catch (err) {
    throw err.response?.data || { message: "دریافت اطلاعات کاربر ناموفق بود" };
  }
};
