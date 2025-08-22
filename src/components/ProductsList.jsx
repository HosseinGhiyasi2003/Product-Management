import { useQuery } from "@tanstack/react-query";
import editIcon from "../assets/icons/edit.svg";
import trashIcon from "../assets/icons/trash.svg";
import { BeatLoader } from "react-spinners";
import { useContext } from "react";
import { FormAndModalContext } from "../context/FormAndModalProvider";
import { fetchProducts } from "../services/productsApi"; // 👈 اضافه شد

function ProductsList({ page, limit }) {
  const { setIsDeleteModalOpen, setIsEditModalOpen } = useContext(FormAndModalContext);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: fetchProducts,
    retry: false,
    keepPreviousData: true,
  });


  
  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-40">
        <BeatLoader color="#55A3F0" size={50} />
      </div>
    );

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-40">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  const products = data?.products ?? [];

  return (
    <div className="mt-5">
      <div className="flex border-1 border-[#E4E4E4] rounded-t-[30px] text-[#282828] bg-[#F2F2F2] px-[52px] gap-x-[200px] text-[14px] font-medium py-[25px] overflow-auto">
        <h4>نام کالا</h4>
        <h4>موجودی</h4>
        <h4>قیمت</h4>
        <h4>شناسه کالا</h4>
      </div>
      <ul className="bg-white h-[285.5px] rounded-b-[30px] border-1 border-[#E4E4E4] overflow-auto ">
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500 text-lg">No products yet</p>
          </div>
        ) : (
          products.map((product) => (
            <li
              key={product.id}
              className="pt-4 flex justify-between border-b-1 border-[#F2F2F2]"
            >
              <div className="flex text-[13px] pr-[52px]">
                <span className="inline-block w-[220px] ml-5">{product.name}</span>
                <span className="inline-block w-[220px] ml-5">{Number(product.quantity).toLocaleString()}</span>
                <span className="inline-block w-[220px] ml-5">{Number(product.price).toLocaleString()} هزار تومان</span>
                <span className="inline-block w-[220px] ml-5">{product.id}</span>
              </div>
              <div className="flex items-center gap-x-3.5 pl-[52px]">
                <div className="cursor-pointer size-10">
                  <img onClick={() => setIsEditModalOpen(product)} src={editIcon} alt="" />
                </div>
                <div
                  onClick={() => setIsDeleteModalOpen(product.id)}
                  className="cursor-pointer size-10"
                >
                  <img src={trashIcon} alt="" />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductsList;
