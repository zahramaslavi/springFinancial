export enum ProductType {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Books = "Books",
  Furniture = "Furniture",
  Grocery = "Grocery"
}

export interface Product {
  id: string;             
  name: string;
  description?: string;
  category?: ProductType;
  price?: number;
  stockQuantity?: number;
  SKU?: string;
  createdAt?: string;  
  updatedAt?: string;
}