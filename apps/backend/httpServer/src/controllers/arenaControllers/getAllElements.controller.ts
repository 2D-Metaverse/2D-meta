import { Request,Response } from "express";

export default function getAllElementInArena(req:Request,res:Response){
    res.json({
        functionality:"This route will return all the available elements in an arena"
    })
}