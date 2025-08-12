import editIcon from "../assets/icons/edit.svg";
import trashIcon from "../assets/icons/trash.svg";

function ProductsList() {
  return (
    <div className="mt-5 ">
      <div className="flex border-1 border-[#E4E4E4] rounded-t-[30px] text-[#282828] bg-[#F2F2F2] px-[52px] gap-x-[200px] text-[14px] font-medium py-[25px] overflow-auto">
        <h4>نام کالا</h4>
        <h4>موجودی</h4>
        <h4>قیمت</h4>
        <h4>شناسه کالا</h4>
      </div>
      <ul className="bg-white h-[400px] rounded-b-[30px] border-1 border-[#E4E4E4] overflow-auto ">
        <li className="pt-4 flex justify-between w-fit border-b-1 border-[#F2F2F2]">
          <div className="flex text-[13px] pr-[52px]">
            <span className="inline-block w-[220px] ml-5 ">
              تیشرت طرح انگولار
            </span>
            <span className="inline-block w-[220px] ml-5">۲۹۳</span>
            <span className="inline-block w-[220px] ml-5">90 هزار تومان</span>
            <span className="inline-block w-[220px] ml-5">
              90uf9g9h7895467g974
            </span>
          </div>
          <div className="flex items-center gap-x-3.5 pl-[52px]">
            <div className="cursor-pointer size-10">
              <img src={editIcon} alt="" />
            </div>
            <div className="cursor-pointer size-10">
              <img src={trashIcon} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductsList;
