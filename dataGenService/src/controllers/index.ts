import { Request, Response, NextFunction } from "express";
import Product, { ProductI } from "../models/product";
import 'dotenv/config';


export const productsGenerage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let count = 0;
    const products: ProductI[] = []
    while (count < 100) {
      //Think about how to avoid repeating name on next requests
      const name = `product${count}`;
      const product = new Product(name);
      product.push(product)
    }

    res.send({"success": {"products": products}});

  } catch (error) {
    next(error)
    console.log(`Error while generating products : ${error}`);
  }
}

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products: ProductI[] = Product.find();
    res.send({"success": {"products": products}});
  } catch (error) {
    next(error)
    console.log(`Error while login : ${error}`);
  }
}