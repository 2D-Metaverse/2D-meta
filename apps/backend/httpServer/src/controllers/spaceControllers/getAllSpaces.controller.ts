import { Request, Response } from "express";

export default function getAllSpaces(req:Request, res:Response){
    res.json({
        functionality:"this route will return all the available spaces "
    })
}