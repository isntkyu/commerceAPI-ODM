import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { ProductService } from "../services/ProductService";

const router = Router();

const productController = new ProductController(new ProductService);

router.post('/', productController.postProduct);
router.get('/', productController.getProductList);
router.get('/:productId', productController.getProduct);

export default router