import mongoose from "mongoose";
import ProductSchema from "../schemas/Product";

export class ProductService {
  async add (data: any) {
    const product = await mongoose.model(`${data.store}_products`, ProductSchema);
    product.insertMany(data);
    return "OK";
  }
}