import  { Router } from "express"
import { authRoute } from "./auth.routes.js";
import { userRouter } from "./user.routes.js";
import { spaceRouter } from "./spaces.routes.js";
import { adminRouter } from "./admin.routes.js";


export const indexRouter = Router();

// indexRouter.use("")


indexRouter.use("/", authRoute)
indexRouter.use("/user", userRouter)
indexRouter.use("/space", spaceRouter)
indexRouter.use("/admin", adminRouter)

