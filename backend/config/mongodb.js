import mongoose from "mongoose";

const connectDb = async () => {
    mongoose.connection.on('connected', () => {
        console.log('Db connected');
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)
}

export default connectDb;