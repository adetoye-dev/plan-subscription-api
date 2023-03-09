import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: "Bearer " + process.env.BEARER_SECRET_KEY,
    "Content-Type": "application/json",
  },
});

export default api;
