import axiosInstance from "./axiosInstance";

export const fetchProducts = async ({ queryKey }) => {
  const [_key, page, limit] = queryKey;
  try {
    const response = await axiosInstance.get(
      `/products?page=${page}&limit=${limit}`
    );
    return {
      products: response.data.data,
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    if (
      error.response?.status === 400 &&
      error.response?.data?.message?.includes("out of bounds")
    ) {
      return { products: [], totalPages: 0 };
    }

    if (!error.response) {
      throw new Error("اتصال به اینترنت برقرار نیست یا سرور در دسترس نیست");
    }

    throw error;
  }
};
