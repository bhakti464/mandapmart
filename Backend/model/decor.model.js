import mongoose from "mongoose";

const decorSchema=mongoose.Schema({
    name:String,
    price:Number,
    categoty:String, 
    image:String,
    title:String
})
export const Decor = mongoose.model("Decor", decorSchema);

export default Decor;