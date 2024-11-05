import { Request, Response } from "express";

export default function createNewSpace(req:Request, res:Response){
    res.json({
        functionality:"This route will Create new spaces "
    })
}