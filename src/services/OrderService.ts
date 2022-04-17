import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import { OrderInputDTO } from "../interfaces/IOrder";

export class OrderService {
  async order (data: OrderInputDTO) {
    try {
      const order = await mongoose.model(`${data.store}_orders`);
      order.insertMany(data);
      return "OK";
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async orderList (data: SearchDTO) {
    try {
      const order = await mongoose.model(`${data.store}_orders`);
      const result = await order.find()
      .where(data.searchTarget)
      .regex(data.searchName);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findById (store: string, orderId: string) {
    try {
      const order = await mongoose.model(`${store}_orders`);
      const result = await order.find({ id: orderId })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
