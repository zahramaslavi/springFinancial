import { productGen } from "./apiClient";

export const generateProductsApi = async () => {
  try {
    const res = await productGen.post("/products/generate/");
    return res.data;
  } catch (error: any) {
    console.log("Failed to generate products ", error);
    throw error;
  }
}

export const getProductsApi = async () => {
  try {
    const res = await productGen.get("/products/");
    return res.data;
  } catch(error: any) {
    console.log("Failed to getProducts: ", error);
    throw error;
  }
}
