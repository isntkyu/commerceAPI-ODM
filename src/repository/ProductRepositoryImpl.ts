import mongoose from "mongoose";
import { ProductInputDTO } from "../interfaces/IProduct";
import ProductSchema from "../schemas/Product";
import { ProductRepository } from "./ProductRepository";


export class ProductRepositoryImpl implements ProductRepository {
  async loadCollection (store: string) {
    return await mongoose.model(`${store}_products`, ProductSchema);
  }
}