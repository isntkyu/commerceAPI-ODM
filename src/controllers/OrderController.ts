import express, { NextFunction, Request, Response } from "express";
import { OrderService } from "../services/OrderService";

export class OrderController {
  constructor (
    private orderService: OrderService
  ) {}

  postOrder = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const result = await this.orderService.order(req.body);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };
}