import express from "express";
import {
  createOrder,
  orderStatus,
  refundStatus,
  trackOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/order").post(createOrder);
router.route("/order/:id").put(orderStatus);
router.route("/order/:id").put(refundStatus);
router.route("/order/:id").get(trackOrder);

export default router;
