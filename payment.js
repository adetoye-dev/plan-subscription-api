import express from "express";
import { initializePayment } from "./handlers/initialize.js";
import { verifyPayment } from "./handlers/verify.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from payment route");
});

router.post("/initialize", initializePayment);
router.get("/verify/:reference", verifyPayment);

export default router;
