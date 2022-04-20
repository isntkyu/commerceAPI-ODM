import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import { ProductInputDTO } from "../interfaces/IProduct";
import { ProductRepository } from "../interfaces/repository/ProductRepository";
import ProductSchema from "../schemas/Product";

export class ProductService {
  constructor (
    private productRepository: ProductRepository
  ) {}

  async add (data: ProductInputDTO) {
    try {
      const product = await this.productRepository.loadCollection(data.store);
      await product.insertMany(data);
      return "OK";
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async productList (data: SearchDTO) {
    try {
      const product = await this.productRepository.loadCollection(data.store);

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
      const product = await this.productRepository.loadCollection(store);
      const result = await product.findOne({ id: productId });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}