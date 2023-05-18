import express from "express";
import {
  addDeleveryBoy,
  editDeliveryBoy,
  orderDelivered,
  updateStatus,
} from "../controllers/deliveryBoyController";

const router = express.Router();

router.route("/deliveryboy").post(addDeleveryBoy);
router.route("/deliveryboy/:id").put(editDeliveryBoy);
router.route("/updatestatus/:id").put(updateStatus);
router.rooute("orderdelivered/:id").get(orderDelivered);

export default router;
