import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Union.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../utils/registerValidation";
import { registerUser } from "../services/authApi";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerFormSchema),
  });

  const formSubmitting = async (data) => {
  try {
    setErrorMessage(""); // پاک کردن خطای قبلی
    const res = await registerUser(data);

    // ✅ موفقیت
    if (res) {
      navigate("/login");
    }
  } catch (err) {
    // ✅ خطا از سمت بک‌اند
    const backendMessage = err.response?.data?.message;

    if (backendMessage === "User already exists") {
      setErrorMessage("کاربر درحال حاضر وجود دارد");
    } else {
      setErrorMessage("ثبت نام ناموفق بود! دوباره تلاش کنید");
    }
  }
};



  return (
    <section className="px-4">
      <div className="container">
        <div className="w-[460px] max-w-full bg-white mx-auto mt-[10px] px-[25px] rounded-[40px] border-1 border-[#E4E4E4]">
          <div className="flex flex-col items-center pt-[51px]">
            <img src={logo} alt="" />
            <h2 className="mt-4 font-medium text-2xl">فرم ثبت نام</h2>
          </div>
          <form className="mt-[63px]" onSubmit={handleSubmit(formSubmitting)}>
            <input
              type="text"
              placeholder="نام کاربری"
              className="bg-[#f2f2f2] w-full p-3.5 text-[#28282880] outline-0 rounded-[15px]"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.username.message}
              </span>
            )}

            <input
              type="password"
              placeholder="رمز عبور"
              className="bg-[#f2f2f2] w-full p-3.5 text-[#28282880] outline-0 rounded-[15px] mt-4"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.password.message}
              </span>
            )}

            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="bg-[#f2f2f2] w-full p-3.5 text-[#28282880] outline-0 rounded-[15px] mt-4"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.confirmPassword.message}
              </span>
            )}

            {/* پیام خطا */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
            )}

            <button
              disabled={isSubmitting}
              className="bg-btn w-full py-[11px] text-white text-[20px] rounded-[15px] mt-[35px] cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "در حال ثبت..." : "ثبت نام"}
            </button>
          </form>
          <Link
            to="/login"
            className="text-[#3A8BED] mt-[19px] mb-5 inline-block"
          >
            حساب کاربری دارید؟
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
