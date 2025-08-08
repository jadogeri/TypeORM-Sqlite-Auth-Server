
import  asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import * as userService from "../services/userService"

export const registerUser = asyncHandler( async (req : Request, res: Response) => {

    const user = await userService.create(req.body);

    res.status(201).json(user);
});
