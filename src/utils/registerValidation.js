import * as yup from "yup";
export const registerFormSchema = yup.object({
  username: yup
    .string()
    .required('نام کاربری را وارد کنید')
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
    .max(20, "نام کاربری باید حداکثر 20 کاراکتر باشد"),
  password: yup
    .string()
    .required('رمز عبور را وارد کنید')
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(30, "رمز عبور باید حداکثر 30 کاراکتر باشد"),
  confirmPassword: yup
    .string()
    .required('رمز عبور وارد شده را دوباره وارد کنید')
    .oneOf(
      [yup.ref("password"), null],
      "رمز عبور با تکرار رمز عبور مطابقت ندارد"
    ),
});
