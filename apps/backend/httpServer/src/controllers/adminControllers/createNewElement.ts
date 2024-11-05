import { Request, Response } from "express";

export default function createNewElement(req:Request, res:Response){
    res.json({
        functinality: "This route will let admins create new elements for the arena"
    })
}
