import { Request, Response } from "express";

export default function getSpaceArena(req:Request, res:Response){
    res.json({
        functionality:"This route will return a space Arena"
    })
}