import mongoose from "mongoose";
import CustomerSchema from "../schemas/Customer";
import CustomerField from "../schemas/CustomerField";
import OrderSchema from "../schemas/Order";
import ProductSchema from "../schemas/Product";

export class ShopService {
  async createShop (userName: string) {
    try {
      const testC = await mongoose.model(`${userName}_Customer`, CustomerSchema);
      await CustomerField.insertMany({
        store: userName
      })
      const testP = await mongoose.model(`${userName}_Product`, ProductSchema);
      const testO = await mongoose.model(`${userName}_Order`, OrderSchema);
      // await testC.insertMany({ 
      //   id: "!3",
      //   email: "132",
      //   name: "1232",
      //   password: "!#52",
      //   store: "!3112",
      //   필드 : 1235
      // });
      // const data = await test.find({});
      // testC.find({}).then((res) => {
      //   console.log(res);
      // });
      // testC.update
      console.log('success');
      return 'OK';
    } catch (err) {
      console.error(err);
    }
  }

  async updateCustomerField (data: any) {
    try {
      console.log('suc22cess', data.userName);
      await CustomerField.updateOne({
        store: data.userName
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
            // [{ signupPhoneUse: data.signupPhoneUse },
      //   { signupRequiredPhoneUse: data.signupRequiredPhoneUse },
      //   { signupAddressUse: data.signupAddressUse },
      //   { signupRequiredAddressUse: data.signupRequiredAddressUse },
      //   { signupBirthDateUse: data.signupBirthDateUse },
      //   { signupRequiredBirthDateUse: data.signupRequiredBirthDateUse },
      //   { signupSexUse: data.signupSexUse },
      //   { signupRequiredSexUse: data.signupRequiredSexUse },
      //   { signupRecommenderUse: data.signupRecommenderUse },
      //   { signupRequiredRecommenderUse: data.signupRequiredRecommenderUse }]

      return CustomerField.find({ store: data.userName });
    } catch (err) {
      console.error(err);
    }
  }
}