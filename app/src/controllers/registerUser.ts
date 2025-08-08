
import  asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import * as userService from "../services/userService"
import { errorBroadCaster } from "../utils/errorBroadCaster";

export const registerUser = asyncHandler( async (req : Request, res: Response) => {
  try {
    console.log("printing body",req.body)
    const user = await userService.create(req.body);
    res.status(201).json(user);
 } catch (error: unknown) {
    if (error instanceof SyntaxError && error.message.includes('Bad control character in string literal in JSON')) {
      console.error('JSON parsing error:', error.message);
      res.status(400).json("registerUser" +'Invalid JSON: Contains unescaped control characters.');
    } else {
      console.error('An unexpected error occurred:', error);
      res.status(500).send("registerUser" +'An internal server error occurred.');
    }
    //   if (error instanceof Error) {
    //     res.status(500).send("Caught an Error:" + error.message);
    //   } else {
    //     res.send("Caught an unknown error:" +  error);
    //   }
    }
});

