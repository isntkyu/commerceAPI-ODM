import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import { ProductInputDTO } from "../interfaces/IProduct";
import ProductSchema from "../schemas/Product";

export class ProductService {
  async add (data: ProductInputDTO) {
    try {
      const product = await mongoose.model(`${data.store}_products`, ProductSchema);
      await product.insertMany(data);
      return "OK";
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async productList (data: SearchDTO) {
    try {
      const product = await mongoose.model(`${data.store}_products`, ProductSchema);

      if (data.searchTarget === '') {
        return await product.find({});
      }

      const result = await product.find()
          .where(data.searchTarget)
          .regex(`.*${data.searchName}.*`);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findById (store:string, productId: string) {
    try {
      const product = await mongoose.model(`${store}_products`, ProductSchema);
      const result = await product.findOne({ id: productId });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}