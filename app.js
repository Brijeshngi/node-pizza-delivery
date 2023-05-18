import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middleware/Error.js";
import cookieParser from "cookie-parser";

config({
  path: "./config/config.env",
});

const app = express();

// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// importing and using routes
app.use(cookieParser());
import city from "./routes/cityRoutes.js";
import delivery from "./routes/deliveryBoyRoute.js";
import order from "./routes/orderRoute.js";
import payment from "./routes/paymentRoutes.js";
import pizza from "./routes/pizzaRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/api/v1", city);
app.use("/api/v1", delivery);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", pizza);
app.use("/api/v1", user);

export default app;

app.use(ErrorMiddleware);
