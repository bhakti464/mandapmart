import { Decor } from "../model/decor.model.js";

export const getDecor = async(req, res) => {
    try{
        const decor = await Decor.find();
        res.status(200).json(decor);
    } catch (error){
            console.log("Error: ", error);
            res.status(500).json(error);
    }
}

