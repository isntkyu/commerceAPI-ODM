import { Router } from 'express';
import ShopRouter from './ShopRouter';

const router = Router();

router.use('/api/v1/shop', ShopRouter);

export default router;