import express from 'express'
import { addToCart, deleteCart, getUserCart, updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post("/get", authUser, getUserCart)
cartRouter.post("/add", authUser, addToCart)
cartRouter.post("/update", authUser, updateCart)
cartRouter.post("/delete", authUser, deleteCart)

export default cartRouter