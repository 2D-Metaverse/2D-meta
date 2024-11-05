import { Request, Response } from "express";

export default function getAllAvatars(req:Request, res:Response){
    res.json({
        functionality:"This route will return the list of available avatars",
    })
}