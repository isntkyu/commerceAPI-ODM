import mongoose from "mongoose";
import { ProductInputDTO } from "../interfaces/IProduct";
import ProductSchema from "../schemas/Product";

export interface ProductRepository {
  loadCollection (data: String) ;
}