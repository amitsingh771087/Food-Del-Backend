import express from 'express';
import authMiddleware from '../middleware/auth.js';

import { addToCart, removeFromCart , getcart } from '../controllers/cartController.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/get",authMiddleware, getcart);

export default cartRouter;