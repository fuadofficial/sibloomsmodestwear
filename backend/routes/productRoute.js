import express from 'express'
import { addProduct, listProducts, removeProduct, singleProduct } from "../controllers/productController.js"
import upload from '../middleware/multer.js'

const porductRouter = express.Router()

porductRouter.post("/add", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct)
porductRouter.post("/remove", removeProduct)
porductRouter.post("/single", singleProduct)
porductRouter.get("/list", listProducts)

export default porductRouter