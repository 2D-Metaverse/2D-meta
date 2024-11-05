import { Router } from "express";
import updateMetadata from "../controllers/userController/userMetadata.controller";
import getAllAvatars from "../controllers/userController/userAvatars.controller";
import handleBulkMetaData from "../controllers/userController/bulkMetadata.controller";

export const userRouter = Router();



userRouter.get("/metadata/bulk/:ids", handleBulkMetaData)
userRouter.get("/avatars", getAllAvatars)
userRouter.post("/metadata", updateMetadata)
