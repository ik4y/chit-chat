import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  console.log(body);

  const user = await UserModel.create(body);
  res.json({ user });
};
