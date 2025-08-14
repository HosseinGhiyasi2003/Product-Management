import * as yup from 'yup'

export const addProductFormSchema = yup.object({
  productName: yup.string().required('نام کالا را وارد کنید'),
  inventory: yup.string().required('تعداد محصول را وارد کنید'),
  price: yup.string().required('قیمت کالا را وارد کنید'),
})