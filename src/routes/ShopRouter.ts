import { Router } from "express";
import { ShopController } from "../controllers";
import { ShopService } from "../services/ShopService";
// import { ShopController } from "../controllers";

const router = Router();

// const shopController = new ShopController(new ShopService);


router.post('/', ShopController.postShop);
router.post('/saveCustomerSetting', ShopController.saveCustomerSetting);

// router.use('/', ShopController.postShop);  왜 안됌ㅋㅋㅋtr
// router.use('/saveCustomerSetting', ShopController.saveCustomerSetting);

export default router;
