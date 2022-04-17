import mongoose from "mongoose";
import { CustomerSettingDTO } from "../interfaces/IShop";
import CustomerSchema from "../schemas/Customer";
import CustomerField from "../schemas/CustomerField";
import OrderSchema from "../schemas/Order";
import ProductSchema from "../schemas/Product";

export class ShopService {
  async createShop (userName: string) {
    try {
      await mongoose.model(`${userName}_Customer`, CustomerSchema);
      await CustomerField.insertMany({ store: userName });
      await mongoose.model(`${userName}_Product`, ProductSchema);
      await mongoose.model(`${userName}_Order`, OrderSchema);
      return 'OK';
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async updateCustomerField (data: CustomerSettingDTO) {
    try {
      await CustomerField.updateOne({
        store: data.store
      },
      {
        signupPhoneUse: data.signupPhoneUse,
        signupRequiredPhoneUse: data.signupRequiredPhoneUse,
        signupAddressUse: data.signupAddressUse,
        signupRequiredAddressUse: data.signupRequiredAddressUse,
        signupBirthDateUse: data.signupBirthDateUse,
        signupRequiredBirthDateUse: data.signupRequiredBirthDateUse,
        signupSexUse: data.signupSexUse,
        signupRequiredSexUse: data.signupRequiredSexUse,
        signupRecommenderUse: data.signupRecommenderUse,
        signupRequiredRecommenderUse: data.signupRequiredRecommenderUse
      });
      const result = await CustomerField.find({ store: data.store });
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}