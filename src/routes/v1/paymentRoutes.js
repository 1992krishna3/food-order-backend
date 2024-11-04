import express from 'express';
import { createOrder, verifyPayment } from '../../controllers/paymentController.js';
import authMiddleware from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-order',authMiddleware, createOrder);
router.post('/verify-payment', verifyPayment);

export default router;
