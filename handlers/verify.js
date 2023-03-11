import api from "../api.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyPayment = async (req, res) => {
  const clientUrl = process.env.CLIENT_URL;
  console.log("verification api was called");
  console.log(req.params);
  const ref = req.params.reference;
  try {
    const { data } = await api.get("/transaction/verify/" + ref);
    if (data.data.status === "success")
      return res.status(200).redirect(clientUrl + "/thank-you");
    console.log(data.data);
    res.json(data.data);
  } catch (error) {
    res.json(error.data);
  }
};
