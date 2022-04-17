import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import { ProductInputDTO } from "../interfaces/IProduct";

export class ProductService {
  async add (data: ProductInputDTO) {
    const product = await mongoose.model(`${data.store}_products`);
    product.insertMany(data);
    return "OK";
  }

  async productList (data: SearchDTO) {
    try {
      const product = await mongoose.model(`${data.store}_products`);
      const result = await product.find()
        .where(data.searchTarget)
        .regex(data.searchName);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findById (store:string, productId: string) {
    try {
      const product = await mongoose.model(`${store}_products`);
      const result = await product.find({ id: productId });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}