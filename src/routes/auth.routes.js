import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userSchema, loginSchema } from "../schemas/auth.schema.js";


const authRouter = Router()

authRouter.post("/sign-up", validateSchema(userSchema), signUp)
authRouter.post("/sign-in", validateSchema(loginSchema), signIn)
authRouter.post("/sign-out")

export default authRouter