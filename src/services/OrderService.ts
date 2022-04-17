import mongoose from "mongoose";
import OrderSchema from "../schemas/Order";

export class OrderService {
  async order (data: any) {
    const order = await mongoose.model(`${data.store}_orders`, OrderSchema);
    order.insertMany(data);
    return "OK";
  }
}