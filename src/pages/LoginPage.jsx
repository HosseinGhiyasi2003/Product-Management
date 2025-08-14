import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Union.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../utils/loginValidation";


function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const formSubmitting = (data) => {
    console.log(data);
    
  };

  return (
    <section className="px-4">
      <div className="container">
        <div className="w-[460px] max-w-full bg-white mx-auto mt-[10px] px-[25px] rounded-[40px] border-1 border-[#E4E4E4]">
          <div className="flex flex-col items-center pt-[51px]">
            <img src={logo} alt="" />
            <h2 className="mt-4 font-medium text-2xl">فرم ورود</h2>
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

            <button className="bg-btn w-full py-[11px] text-white text-[20px] rounded-[15px] mt-[35px] cursor-pointer">
              ورود
            </button>
          </form>
          <Link
            to="/register"
            className="text-[#3A8BED] mt-[19px] mb-5 inline-block"
          >
            ایجاد حساب کاربری!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
