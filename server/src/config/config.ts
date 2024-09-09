import { CONFIG } from "../types";

require("dotenv").config();

export const config: CONFIG = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};
