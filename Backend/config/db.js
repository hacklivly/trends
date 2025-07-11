import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://trendscafe:harshverma@cluster0.undwg8j.mongodb.net/trendscafefood?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}
