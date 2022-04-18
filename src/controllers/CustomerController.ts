import { NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {
  constructor (
    private customerService: CustomerService
  ) {}

  postUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.customerService.join(req.body);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomerSetting = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.customerService.findCustomerSetting(req.body.store);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomerList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.customerService.customerList(req.body);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.customerService.findById(req.body.store, req.params.customerId);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };
}