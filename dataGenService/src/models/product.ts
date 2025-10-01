import mongoose, { Document, Model }  from "mongoose";

enum ProductType {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Books = "Books",
  Furniture = "Furniture",
  Grocery = "Grocery"
}

export interface ProductI extends Document {
  id: string,
  name: string,
  description: string,
  category: ProductType,
  price: number,
  stockQuantity: number,
  SKU: string
}

interface ProductModelI extends Model<ProductI> {}

const Schema = mongoose.Schema;

const productSchema = new Schema<ProductI>({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  description: { 
    type: String,
    required: [false],
  },
  category: {
    type: String,
    required: [false]
  },
  price: {
    type: Number,
    required: [false]
  },
  stockQuantity: {
    type: Number,
    required: [false]
  },
  SKU: {
    type: String,
    required: [false]
  },
}, {timestamps: true});


const Product = mongoose.model<ProductI, ProductModelI>("Product", productSchema)
export default Product;