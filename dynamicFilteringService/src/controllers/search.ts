import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const searchProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchKeyword } = req.params;

    if (!searchKeyword || searchKeyword.trim() === "") {
      return res.status(400).json({ message: "Search keyword is required" });
    }

    const regex = new RegExp(searchKeyword, "i");

    const products = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
        { SKU: regex },
        { price: isNaN(Number(searchKeyword)) ? undefined : Number(searchKeyword) }, // if numeric
        { stockQuantity: isNaN(Number(searchKeyword)) ? undefined : Number(searchKeyword) },
      ].filter(Boolean) // remove undefined
    });

    return res.status(200).json(products);    
  } catch (error) {
    // Todo: log using morgan
    console.log(`Error while fetching messages of user with id ${id} : ${error}`);
    next(error)
  }
}

