import { Router } from "express";
import createNewElement from "../controllers/adminControllers/createNewElement";
import updateExistingElement from "../controllers/adminControllers/updateElement";
import createAvatar from "../controllers/adminControllers/createNewAvatars";
import createMaps from "../controllers/adminControllers/createMaps";

export const adminRouter = Router();

adminRouter.post("/element", createNewElement)
adminRouter.put("/element/:elementId", updateExistingElement)
adminRouter.post("/avatar", createAvatar)
adminRouter.post("/map", createMaps)