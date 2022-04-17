import { Router } from "express";
import { ShopController } from "../controllers/ShopController";
import { ShopService } from "../services/ShopService";

const router = Router();

const shopController = new ShopController(new ShopService);

router.post('/', shopController.postShop);
router.post('/saveCustomerSetting', shopController.saveCustomerSetting);

export default router;
