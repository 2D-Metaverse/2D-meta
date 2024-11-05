import { Request, Response } from "express";

export default function signInHandler(req:Request,res:Response){
   res.json({
    message: "hii there from signin "
   })
}