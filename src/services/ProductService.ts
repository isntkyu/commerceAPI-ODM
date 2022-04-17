import mongoose from "mongoose";
import ProductSchema from "../schemas/Product";

export class ProductService {
  async add (data: any) {
    const product = await mongoose.model(`${data.store}_products`);
    product.insertMany(data);
    return "OK";
  }

  async productList (data: any) {
    const product = await mongoose.model(`${data.store}_products`);
    const result = await product.find({});
    return result;
  }

  async findById (store:string, productId: string) {
    const product = await mongoose.model(`${store}_products`);
    const result = await product.find({ id: productId });
    return result;
  }
}