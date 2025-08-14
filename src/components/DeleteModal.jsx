import deleteImg from "../assets/images/close.svg";

function DeleteModal() {
  return (
    <div className="fixed backdrop-blur-[10px] top-0  right-0 w-full h-full bg-[#3333337D] flex justify-center items-center px-2.5">
      <div className="w-[472px] max-w-full bg-white pt-[45px] pb-8.5 rounded-[30px]">
        <div className="flex justify-center">
          <img src={deleteImg} alt="" className="size-24" />
        </div>
        <h2 className="text-center mt-16 text-xl">آیا از حذف این محصول مطمئنید؟</h2>
        <div className="mt-[25px] flex justify-center gap-x-[15px]">
          <button className="bg-[#F43F5E] px-[69px] py-2 rounded-[10px] text-white cursor-pointer">حذف</button>
          <button className="bg-[#DFDFDF] px-[69px] py-2 rounded-[10px] text-[#282828CC] cursor-pointer">لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
