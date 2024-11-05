import { Request, Response } from "express";

export default function updateExistingElement(req: Request, res: Response) {
    const elementID = req.params;
    res.json({
        functionality:"This will let existing element to be updates by admin for arena ",
        elementID: elementID,
    })
}