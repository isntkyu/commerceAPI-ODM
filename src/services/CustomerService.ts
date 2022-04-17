import mongoose from "mongoose";
import CustomerSchema from "../schemas/customer";
import CustomerField from "../schemas/CustomerField";

export class CustomerService {
  async join (store: string, data: any) {
    try {
      const customer = await mongoose.model(`${store}_customers`, CustomerSchema);
      const user = await customer.find({ id: data.customerId });
      // console.log(user.length === 0);
      if (user.length !== 0) {
        return { err: '이미 존재하는 고객입니다.' }
      } else {
        await customer.insertMany(data);
      }
      // return "!"
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findCustomerSetting (store: string) {
    try {
      const customerField = await CustomerField.find({ store: store });
      return customerField;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}