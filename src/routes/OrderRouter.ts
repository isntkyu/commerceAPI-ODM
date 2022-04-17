import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderService } from "../services/OrderService";

const router = Router();

const orderController = new OrderController(new OrderService);

router.post('/', orderController.postOrder);
router.get('/', orderController.getOrderList);
router.get('/:orderId', orderController.getOrder);

export default router