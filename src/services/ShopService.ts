import mongoose from "mongoose";
import CustomerSchema from "../schemas/customer";
import OrderSchema from "../schemas/order";
import ProductSchema from "../schemas/product";

export class ShopService {
  async createShop (userName: string) {
    try {
      const testC = await mongoose.model(`${userName}_Customer`, CustomerSchema);
      const testP = await mongoose.model(`${userName}_Product`, ProductSchema);
      const testO = await mongoose.model(`${userName}_Order`, OrderSchema);
      // const data = await test.find({});
      testC.find({}).then((res) => {
        console.log(res);
      });
      // testC.update
      console.log('success');
    } catch (err) {
      console.error(err);
    }
  }
}