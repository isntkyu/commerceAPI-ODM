import express, { NextFunction, Request, Response } from "express";
import CustomerField from "../schemas/CustomerField";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {
  constructor (
    private customerService: CustomerService
  ) {}

  postUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log(111)
      const result = await this.customerService.join(req.body.userName, req.body);
      // if (result.err) {}
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomerSetting = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log(111)
      const result = await this.customerService.findCustomerSetting(req.body.userName);
      // if (result.err) {}
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomerList = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log(111)
      const result = await this.customerService.customerList(req.body);
      // if (result.err) {}
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try{
      // const shopService = new ShopService();
      // console.log(111)
      const result = await this.customerService.findById(req.body.store, req.params.customerId);
      // if (result.err) {}
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };
}