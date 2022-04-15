import express, { NextFunction, Request, Response } from "express";
import { ShopService } from "../services/ShopService";

const test = async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log('test')
    const shopService = new ShopService();
    await shopService.createShop();
  } catch (err) {
    next(err);
  }
};

export default { test }