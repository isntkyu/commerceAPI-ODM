import { Router } from 'express';
import CustomerRouter from './CustomerRouter';
import OrderRouter from './OrderRouter';
import ProductRouter from './ProductRouter';
import ShopRouter from './ShopRouter';

const router = Router();

router.use('/api/v1/shop', ShopRouter);
router.use('/api/v1/customer', CustomerRouter);
router.use('/api/v1/order', OrderRouter);
router.use('/api/v1/product', ProductRouter);

export default router