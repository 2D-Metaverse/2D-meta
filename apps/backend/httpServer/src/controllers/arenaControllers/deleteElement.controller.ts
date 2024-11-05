import { Request, Response } from "express";

export default function deleteElementFromArena(req:Request, res:Response){
    res.json({
        functionality:"This route will help delete and element from the arena"
    })
}