import { Router } from "express";
import { ShopController } from "../controllers/ShopController";
import { ShopService } from "../services/ShopService";
// import { ShopController } from "../controllers";

const router = Router();

const shopController = new ShopController(new ShopService);


router.post('/', shopController.postShop);
router.post('/saveCustomerSetting', shopController.saveCustomerSetting);

// router.use('/', ShopController.postShop);  왜 안됌ㅋㅋㅋtr
// router.use('/saveCustomerSetting', ShopController.saveCustomerSetting);

export default router;
