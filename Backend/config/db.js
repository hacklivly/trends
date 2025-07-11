import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://trendscafe:harshverma@cluster0.undwg8j.mongodb.net/trendscafefood').then(()=>console.log("DB Connected"));
}
