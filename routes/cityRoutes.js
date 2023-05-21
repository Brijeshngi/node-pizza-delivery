import express from "express";
import {
  allCity,
  createCity,
  deleteCity,
  updateCity,
} from "../controllers/cityController.js";

const router = express.Router();

router.route("/city").post(createCity).get(allCity);
router.route("/city/:id").put(updateCity).delete(deleteCity);

export default router;
