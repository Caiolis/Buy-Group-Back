import { Router } from "express";


const productRouter = Router()

productRouter.post("/products")
productRouter.get("/products")
productRouter.post("/cart")
productRouter.get("/cart")

export default productRouter