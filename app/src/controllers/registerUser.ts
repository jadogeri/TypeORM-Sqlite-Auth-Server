
import  asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const registerUser = asyncHandler( async (req : Request, res: Response) => {
    const user = userRepository.create(req.body);
    await userRepository.save(user);
    res.status(201).json(user);
});
