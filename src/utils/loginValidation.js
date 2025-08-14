import * as yup from "yup";

export const loginFormSchema = yup.object({
  username: yup.string().required("نام کاربری را وارد کنید"),
  password: yup.string().required("رمز عبور کاربری را وارد کنید"),
});