import mongoose from "mongoose";
import { ProductInputDTO } from "../interfaces/IProduct";
import { ProductRepository } from "../interfaces/repository/ProductRepository";
import ProductSchema from "../schemas/Product";


export class ProductRepositoryImpl implements ProductRepository {
  async loadCollection (store: string) {
    return await mongoose.model(`${store}_products`, ProductSchema);
  }
}