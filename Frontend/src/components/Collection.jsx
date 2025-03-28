import { useState } from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import JSON files
import allData from "../data/collectionlist.json";
import mandapsData from "../data/mandaps.json";
import flowersData from "../data/flowers.json";
import chairsData from "../data/chairs.json";
import statueData from "../data/statue.json";
import decorationsData from "../data/decorations.json";

function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Map categories to their respective JSON data
  const categoryData = {
    All: allData,
    Mandaps: mandapsData,
    Flowers: flowersData,
    Chairs: chairsData,
    Statue: statueData,
    Decorations: decorationsData,
  };

  const decor = categoryData[selectedCategory] || [];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 pt-10 px-4 bg-white dark:bg-gray-900">
        <div className="items-center justify-center text-center">
          <h1 className="pt-20 text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-6">
            Explore our exclusive collection of beautifully crafted mandaps, decorative items, and event essentials 
            designed to make every occasion grand and memorable.
          </p> 
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {Object.keys(categoryData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md border ${
                selectedCategory === category ? "bg-pink-500 text-white" : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Filtered Items */}
        <div key={selectedCategory} className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {decor.length > 0 ? (
            decor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Cards item={item} />
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No items found for "{selectedCategory}".
            </p>
          )}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link to="/">
            <button className="mt-6 mb-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Collection;
