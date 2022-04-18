import mongoose from "mongoose";
import { SearchDTO } from "../interfaces/common/ISearchList";
import CustomerSchema from "../schemas/Customer";
import CustomerField from "../schemas/CustomerField";

export class CustomerService {
  async join (data: any) {
    try {
      const customer = await mongoose.model(`${data.store}_customers`, CustomerSchema);
      const user = await customer.find({ id: data.customerId });
      if (user.length !== 0) {
        return { err: '이미 존재하는 고객입니다.' }
      } else {
        const option = await this.findCustomerSetting(data.store);
        if (
            (option.signupRequiredPhoneUse && !data.phone)
          || (option.signupRequiredAddressUse && !data.address)
          || (option.signupRequiredBirthDateUse && !data.birthDate)
          || (option.signupRequiredSexUse && !data.sex)
          || (option.signupRequiredRecommenderUse && !data.recommender)
        ) {
          return { err: '필수 값을 입력해주세요.' }
        }
        await customer.insertMany(data);
        return 'OK';
      }
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

  async customerList (data: SearchDTO) {
    try {
      const customer = await mongoose.model(`${data.store}_customers`, CustomerSchema);

      if (data.searchTarget === '') {
        return await customer.find({});
      }

      const result = await customer.find()
        .where(data.searchTarget)
        .regex(`.*${data.searchName}.*`);
      return result;
    } catch (err) {
      console.log(err);
      return err;
  }
  }

  async findById (store: string, customerId: string) {
    try {
      const customer = await mongoose.model(`${store}_customers`, CustomerSchema);
      const result = await customer.findOne({ id: customerId });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}