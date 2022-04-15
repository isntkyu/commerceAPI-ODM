import mongoose from "mongoose";
import CustomerSchema from "../schemas/customer";
import OrderSchema from "../schemas/order";
import ProductSchema from "../schemas/product";

export class ShopService {
  async createShop () {
    try {
      const testC = await mongoose.model('testC', CustomerSchema);
      const testP = await mongoose.model('testP', ProductSchema);
      const testO = await mongoose.model('testO', OrderSchema);
      // const data = await test.find({});
      console.log('success');
    } catch (err) {
      console.error(err);
    }
  }
}