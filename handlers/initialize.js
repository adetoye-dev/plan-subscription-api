import api from "../api.js";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

export const initializePayment = async (req, res) => {
  const ref = nanoid();
  try {
    const data = await api.post("/transaction/initialize", {
      amount: "1000",
      email: req.body.email,
      reference: ref,
      callback_url: process.env.SERVER_URL + "/api/payment/verify/" + ref,
      channels: ["card"],
    });
    res.json(data.data);
  } catch (error) {
    res.json(error.data);
  }
};
