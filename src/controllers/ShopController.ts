import express, { NextFunction, Request, Response } from "express";
import { ShopService } from "../services/ShopService";

export class ShopController {
  constructor (
    private shopService: ShopService
  ) {}

  postShop = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log(111)
      const result = await this.shopService.createShop(req.body.userName);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  saveCustomerSetting = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log('r b ', req.body)
      // console.log(112)
      const result = await this.shopService.updateCustomerField(req.body);
      res.json({
        RESULT: "OK",
        shopCustomerSetting: result
      });
    } catch (err) {
      next(err);
    }
  };
}

// const postShop = async (req: Request, res: Response, next: NextFunction) => {
//   try{
//     const shopService = new ShopService();
//     const result = await shopService.createShop(req.body.userName);
//     res.json({RESULT: result});
//   } catch (err) {
//     next(err);
//   }
// };

// const saveCustomerSetting = async (req: Request, res: Response, next: NextFunction) => {
//   try{
//     console.log(112)
//     const shopService = new ShopService();
//     const result = await shopService.updateCustomerField(req.body);
//     res.json({RESULT: result});
//   } catch (err) {
//     next(err);
//   }
// };
// export default { postShop, saveCustomerSetting }