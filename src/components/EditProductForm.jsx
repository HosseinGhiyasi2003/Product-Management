function EditProductForm() {

  return (
    <div className="absolute backdrop-blur-[10px] top-0 right-0 w-full h-full bg-[#3333337D] flex justify-center items-center">
      <div className="w-[460px] max-w-full bg-white py-[30px] px-9 rounded-[30px]">
        <h3 className="text-center font-medium text-xl">ویرایش اطلاعات</h3>
        <form className="mt-[30px]">
          <div>
            <label htmlFor="product-name" className="text-[#282828] text-[14px] font-medium">
              نام کالا
            </label>
            <input
              type="text"
              id="product-name"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="inventory" className="text-[#282828] text-[14px] font-medium">
              تعداد موجودی
            </label>
            <input
              type="text"
              id="inventory"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price" className="text-[#282828] text-[14px] font-medium">
              قیمت
            </label>
            <input
              type="text"
              id="price"
              className="w-full bg-[#F2F2F2] text-[#282828] outline-0 p-2.5 mt-4 rounded-[8px]"
            />
          </div>
          <div className="flex gap-x-4.5 mt-10">
            <button className="bg-btn flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-white text-[14px] font-medium">ثبت اطلاعات جدید</button>
            <button className="bg-[#DFDFDF] flex-1/2 flex justify-center items-center py-2.5 rounded-[10px] cursor-pointer text-[#282828CC] text-[14px] font-medium">انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductForm;
