import { Router } from "express";
import { ShopController } from "../controllers";

const router = Router();

router.use('/', ShopController.test);

export default router;
