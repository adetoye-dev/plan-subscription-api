import api from "../api.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyPayment = async (req, res) => {
  console.log("verification api was called");
  console.log(req.params);
  const ref = req.params.reference;
  try {
    const data = await api.get("/transaction/verify/" + ref);
    console.log(data.data);
    res.json(data.data);
  } catch (error) {
    res.json(error.data);
  }
};
