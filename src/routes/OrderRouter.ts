import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderService } from "../services/OrderService";

const router = Router();

const orderController = new OrderController(new OrderService);

router.post('/', orderController.postOrder);

export default router