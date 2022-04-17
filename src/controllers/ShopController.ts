import { NextFunction, Request, Response } from "express";
import { ShopService } from "../services/ShopService";

export class ShopController {
  constructor (
    private shopService: ShopService
  ) {}

  postShop = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const result = await this.shopService.createShop(req.body.userName);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  saveCustomerSetting = async (req: Request, res: Response, next: NextFunction) => {
    try{
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