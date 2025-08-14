import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addProductFormSchema } from "../utils/addProductValidation";

function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      inventory: "",
      price: "",
    },
    resolver: yupResolver(addProductFormSchema)
  });

  const formSubmitting = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed backdrop-blur-[10px] top-0  right-0 w-full h-full bg-[#3333337D] flex justify-center items-center px-2.5">
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
              {...register('productName')}
              />
              {errors.productName && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.productName.message}
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
              id="inventory"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
              {...register('inventory')}
              />
              {errors.inventory && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.inventory.message}
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
              {...register('price')}
            />
            {errors.price && (
              <span className="text-red-500 inline-block mt-2 mr-2">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="flex gap-x-4.5 mt-10">
            <button className="bg-btn flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-white text-[14px] font-medium">
              ایجاد
            </button>
            <button type="button" className="bg-[#DFDFDF] flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-[#282828CC] text-[14px] font-medium">
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
