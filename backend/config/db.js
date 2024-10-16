import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://ben:ClusterPassword1@cluster0.atbcw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}