import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { ProductRepository } from "../repository/ProductRepository";
import { ProductRepositoryImpl } from "../repository/ProductRepositoryImpl";
import { ProductService } from "../services/ProductService";

const router = Router();

const productController = new ProductController(new ProductService(new ProductRepositoryImpl()));

router.post('/', productController.postProduct);
router.get('/', productController.getProductList);
router.get('/:productId', productController.getProduct);

export default router