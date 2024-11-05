import { Request,Response } from "express"

export default function createAvatar(req:Request, res:Response){
    res.json({
        functionality: "This will let admins create new avatar for arena "
    })
}