import morgan from "morgan";
import express from "express";

export const app = express();

app.use(morgan("dev"));
