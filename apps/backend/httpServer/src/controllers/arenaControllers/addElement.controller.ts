import { Request, Response } from "express";

export default function addElementToArena(req:Request, res:Response){
    res.json({
        functionality:"This route will add an element to the space"
    })
}