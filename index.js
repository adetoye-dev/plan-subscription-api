import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoute from "./payment.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_REQUEST_URL,
  })
);

app.use("/api/payment", paymentRoute);

app.get("/", (req, res) => {
  res.send("Hello from payment server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
