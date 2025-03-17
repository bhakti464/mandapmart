import { Decor } from "../model/decor.model.js";

export const getDecor = async (req, res) => {
    try {
        const { category } = req.query; // Get category from query params
        let query = {};

        if (category && category !== "All") {
            query.category = category; // Filter by category
        }

        const decor = await Decor.find(query); // Fetch filtered data
        res.status(200).json(decor);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
