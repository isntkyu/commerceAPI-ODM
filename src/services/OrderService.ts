import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import { OrderInputDTO } from "../interfaces/IOrder";
import OrderSchema from "../schemas/Order";

export class OrderService {
  async order (data: OrderInputDTO) {
    try {
      const order = await mongoose.model(`${data.store}_orders`, OrderSchema);
      await order.insertMany(data);
      return "OK";
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async orderList (data: SearchDTO) {
    try {
      const order = await mongoose.model(`${data.store}_orders`, OrderSchema);

      if (data.searchTarget === '') {
        return await order.find({});
      }

      const result = await order.find()
        .where(data.searchTarget)
        .regex(`.*${data.searchName}.*`);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findById (store: string, orderId: string) {
    try {
      const order = await mongoose.model(`${store}_orders`, OrderSchema);
      const result = await order.findOne({ id: orderId })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
