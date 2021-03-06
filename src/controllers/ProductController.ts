import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  constructor (
    private productService: ProductService
  ) {}
  
  postProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.add(req.body);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getProductList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.productList(req.body);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };

  getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.findById(req.body.store, req.params.productId);
      res.json({RESULT: result});
    } catch (err) {
      next(err);
    }
  };
}