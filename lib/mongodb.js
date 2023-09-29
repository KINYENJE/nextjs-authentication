import mongoose from "mongoose";

export default async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB connection failed: ", error.message)
    }
}