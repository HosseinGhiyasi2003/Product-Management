import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addProductFormSchema } from "../utils/addProductValidation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
// اگر خواستی بعداً با توکن کار کنی: import axiosInstance from "../services/axiosInstance";

function AddProductForm({ isAddFormOpen, setIsAddFormOpen }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      quantity: "",
      price: "",
    },
    resolver: yupResolver(addProductFormSchema),
  });

  // تابع اضافه کردن محصول
  const mutationFn = async (newProduct) => {
    try {
      return await axiosInstance.post("/products", newProduct);
    } catch (error) {
      if(error.response.status === 403 || error.response.status === 401) {
        navigate('/login')
        
      };
    }
  };

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]); // ✅ ریفرش محصولات
      setIsAddFormOpen(false); // بستن مودال  
    },
  });

  const formSubmitting = (data) => {
    mutate(data);
    
  };

  return (
    <div className="fixed backdrop-blur-[10px] top-0 right-0 w-full h-full bg-[#3333337D] flex justify-center items-center px-2.5">
      <div className="w-[460px] max-w-full bg-white py-[30px] px-9 rounded-[30px]">
        <h3 className="text-center font-medium text-xl">ایجاد محصول جدید</h3>

        <form className="mt-[30px]" onSubmit={handleSubmit(formSubmitting)}>
          <div>
            <label
              htmlFor="product-name"
              className="text-[#282828] text-[14px] font-medium"
            >
              نام کالا
            </label>
            <input
              type="text"
              placeholder="نام کالا"
              id="product-name"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="inventory"
              className="text-[#282828] text-[14px] font-medium"
            >
              تعداد موجودی
            </label>
            <input
              type="number"
              placeholder="تعداد"
              id="quantity"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
              {...register("quantity")}
            />
            {errors.quantity && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.quantity.message}
              </span>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="price"
              className="text-[#282828] text-[14px] font-medium"
            >
              قیمت
            </label>
            <input
              type="number"
              placeholder="قیمت"
              id="price"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
              {...register("price")}
            />
            {errors.price && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.price.message}
              </span>
            )}
          </div>

          <div className="flex gap-x-4.5 mt-10">
            <button
              disabled={isPending}
              className="bg-btn flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-white text-[14px] font-medium disabled:bg-gray-400"
            >
              {isPending ? "در حال ارسال..." : "ایجاد"}
            </button>

            <button
              type="button"
              onClick={() => setIsAddFormOpen(false)}
              className="bg-[#DFDFDF] flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-[#282828CC] text-[14px] font-medium"
            >
              انصراف
            </button>
          </div>
        </form>

        {isError && (
          <p className="text-red-500 mt-4 text-center">
            خطا در ایجاد محصول: {error.message}
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500 mt-4 text-center">
            محصول با موفقیت ایجاد شد 🎉
          </p>
        )}
      </div>
    </div>
  );
}

export default AddProductForm;
