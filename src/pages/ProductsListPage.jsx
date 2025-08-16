import searchIcon from '../assets/icons/search-normal.svg'
import logo from '../assets/images/Union.svg'
import setting from '../assets/icons/setting-3.svg'
import ProductsList from '../components/ProductsList'
import EditProductForm from '../components/EditProductForm'
import AddProductForm from '../components/AddProductForm'
import DeleteModal from '../components/DeleteModal'
import { useContext } from 'react'
import { FormAndModalContext } from '../context/FormAndModalProvider'

function ProductsListPage() {
  const {isAddFormOpen, setIsAddFormOpen, isDeleteModalOpen , setIsDeleteModalOpen, isEditModalOpen, setIsEditModalOpen} = useContext(FormAndModalContext)


  return (
    <>
      <section className="px-4 mt-7">
        <div className="max-w-[1200px] mx-auto">
          {/* search box */}
          <div className='bg-white px-6 py-1.5 flex justify-between items-center border-1 border-[#E4E4E4] rounded-2xl'>
            <div className='flex gap-x-3'>
              <img src={searchIcon} alt="" />
              <input type="text" placeholder='جستجو  کالا' className='outline-0 text-[#00000099]' />
            </div>
            <div className='flex items-center gap-x-2 border-r-1 border-[#E4E4E4] pr-4'>
              <img src={logo} alt="" className='size-10 rounded-full' />
              <div>
                <h3 className='text-[#282828]'>میلاد عظمی</h3>
                <span className='text-[#282828] text-[14px]'>مدیر</span>
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-[41px]'>
            <div className='flex items-center gap-x-1.5'>
              <img src={setting} alt="" />
              <span className='text-2xl text-[#282828]'>مدیریت کالا</span>
            </div>
            <button onClick={() => setIsAddFormOpen(true)} className='bg-btn text-white px-[17px] py-2.5 rounded-[10px] cursor-pointer'>افزودن محصول</button>
          </div>
          <ProductsList/>
        </div>
      </section>
      {isAddFormOpen && <AddProductForm isAddFormOpen={isAddFormOpen} setIsAddFormOpen={setIsAddFormOpen} />}
      {isEditModalOpen && <EditProductForm isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} />}
      {isDeleteModalOpen && <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />}
    </>
  )
}

export default ProductsListPage