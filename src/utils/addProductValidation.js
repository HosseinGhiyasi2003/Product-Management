import * as yup from 'yup'

export const addProductFormSchema = yup.object({
  name: yup.string().required('نام کالا را وارد کنید'),
  quantity: yup.string().required('تعداد محصول را وارد کنید'),
  price: yup.string().required('قیمت کالا را وارد کنید'),
})