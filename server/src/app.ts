import morgan from "morgan";
import express from "express";
import userRoutes from "./routes/user.routes";
import bodyParser, { urlencoded } from "body-parser";

export const app = express();
app.use(urlencoded({ extended: false, limit: "1mb" }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);

app.use(morgan("dev"));
