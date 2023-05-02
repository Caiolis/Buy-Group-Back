import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userSchema } from "../schemas/auth.schema.js";


const authRouter = Router()

authRouter.post("/sign-up", validateSchema(userSchema), signUp)
authRouter.post("/sign-in")
authRouter.post("/sign-out")

export default authRouter