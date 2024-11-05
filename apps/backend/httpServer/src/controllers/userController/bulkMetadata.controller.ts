import { Request, Response } from "express";

export default function handleBulkMetaData(req:Request, res:Response){
    const querryParams = req.params;
    res.json({
        functionality: "return the other metadata ",
        params: querryParams,
    })
}