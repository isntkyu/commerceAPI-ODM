import mongoose from "mongoose";
import OrderSchema from "../schemas/Order";

export class OrderService {
  async order (data: any) {
    const order = await mongoose.model(`${data.store}_orders`);
    order.insertMany(data);
    return "OK";
  }

  async orderList (data: any) {
    const order = await mongoose.model(`${data.store}_orders`);
    const result = await order.find({});
    return result;
  }

  async findById (store: string, orderId: string) {
    const order = await mongoose.model(`${store}_orders`);
    const result = await order.find({ id: orderId })
    return result;
  }
}
