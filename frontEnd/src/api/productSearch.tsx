import { productSearch } from "./apiClient";

export const searchProducts = async (keyword: string) => {
  try {
    const res = await productSearch(`/products/search/${keyword}`);
    return res.data;
  } catch (error) {
    console.log("Failed to search your keyword: ", error);
    throw error;
  }
}

