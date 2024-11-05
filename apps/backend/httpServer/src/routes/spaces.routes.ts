import { Router } from "express";
import getAllSpaces from "../controllers/spaceControllers/getAllSpaces.controller";
import createNewSpace from "../controllers/spaceControllers/createSpace.controller";
import deleteSpace from "../controllers/spaceControllers/deleteSpace.controller";
import getSpaceArena from "../controllers/arenaControllers/getSpaceArena.controller";
import addElementToArena from "../controllers/arenaControllers/addElement.controller";
import deleteElementFromArena from "../controllers/arenaControllers/deleteElement.controller";
import getAllElementInArena from "../controllers/arenaControllers/getAllElements.controller";

export const spaceRouter = Router();

spaceRouter.get("/all", getAllSpaces)
spaceRouter.post("/", createNewSpace)
spaceRouter.delete("/:spaceid",  deleteSpace)


spaceRouter.get("/:spaceid", getSpaceArena)
spaceRouter.post("/element", addElementToArena)
spaceRouter.delete("/element", deleteElementFromArena)
spaceRouter.get("/elements", getAllElementInArena)


