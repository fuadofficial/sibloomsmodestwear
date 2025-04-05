import express from 'express'
import { addProduct, editProduct, listProducts, removeProduct, singleProduct } from "../controllers/productController.js"
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const porductRouter = express.Router()

porductRouter.post("/add", adminAuth, upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct)
porductRouter.post("/remove", adminAuth, removeProduct)
// porductRouter.post("/edit", adminAuth, editProduct)
porductRouter.post("/single", singleProduct)
porductRouter.get("/list", listProducts)

export default porductRouter