import express from "express";
import { initializePayment } from "./handlers/initialize.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from payment route");
});

router.post("/initialize", initializePayment);

export default router;
