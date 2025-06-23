import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    shortCode: {
        type: String,
       
    },
    longUrl: {
        type: String,
        required: true,
    },
})
export const Url=mongoose.model("url",urlSchema)