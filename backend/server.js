import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import porductRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', porductRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

app.listen(port, () => console.log("Server started on PORT : " + port))



// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "server.js",
//             "use": "@vercel/node",
//             "config": {
//                 "includeFiles": [
//                     "dist/**"
//                 ]
//             }
//         }
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest": "server.js"
//         }
//     ]
// }