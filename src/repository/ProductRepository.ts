import mongoose from "mongoose";
import { ProductInputDTO } from "../interfaces/IProduct";
import ProductSchema from "../schemas/Product";

export class ProductRepository {
  async loadCollection (data: ProductInputDTO) {
    return await mongoose.model(`${data.store}_products`, ProductSchema);
  }
}