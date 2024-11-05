import { Request, Response } from "express"

export default function updateMetadata(req:Request, res:Response){
    res.json({
        messge: "hii from updateMetadata"
    })
}