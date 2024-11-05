import { Request, Response } from "express"

export default function createMaps(req:Request, res:Response){
    res.json({
        functionality:"this route will let users create a new map for arena and space and return map id in response"
    })
}