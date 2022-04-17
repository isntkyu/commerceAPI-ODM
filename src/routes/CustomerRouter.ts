import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { CustomerService } from "../services/CustomerService";

const router = Router();

const customerController = new CustomerController(new CustomerService);

router.post('/', customerController.postUser);
router.get('/fieldSetting', customerController.getCustomerSetting);

export default router