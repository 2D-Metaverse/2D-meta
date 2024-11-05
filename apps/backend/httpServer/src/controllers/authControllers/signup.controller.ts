import { Request, Response } from "express";

export default function signupHandler(req:Request,res:Response){
   res.json({
    message: "hii there from signup"
   })
}