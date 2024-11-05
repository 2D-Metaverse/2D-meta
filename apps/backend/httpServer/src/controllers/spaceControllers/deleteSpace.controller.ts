import { Request, Response } from "express";

export default function deleteSpace(req:Request,res:Response){
    res.json({
        functionality:"this route will help user delete an space by its id"
    })
}