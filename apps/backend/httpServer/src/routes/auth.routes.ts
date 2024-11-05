import { Router } from "express";
import signupHandler from "../controllers/authControllers/signup.controller";
import signInHandler from "../controllers/authControllers/signin.controller";


export const authRoute =  Router();

authRoute.get("/signup", signupHandler)

authRoute.get("/signin", signInHandler)