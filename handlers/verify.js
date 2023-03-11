import api from "../api.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyPayment = async (req, res) => {
  const clientUrl = process.env.CLIENT_URL;
  const ref = req.params.reference;
  try {
    const { data } = await api.get("/transaction/verify/" + ref);
    if (data.data.status !== "success") return res.status(500).json(data);
    res.status(200).redirect(clientUrl + "/thank-you");
  } catch (error) {
    res.json(error.data);
  }
};
