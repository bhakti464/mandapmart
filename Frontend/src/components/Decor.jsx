import "react";
import PropTypes from "prop-types"; 
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; 
const CustomPrevArrow = ({ onClick }) => (
  <motion.div
    className="absolute top-1/2 left-[-30px] z-10 cursor-pointer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <SlArrowLeft className="text-4xl text-pink-500 hover:text-pink-700 transition duration-300" />
  </motion.div>
);

const CustomNextArrow = ({ onClick }) => (
  <motion.div
    className="absolute top-1/2 right-[-30px] z-10 cursor-pointer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <SlArrowRight className="text-4xl text-pink-500 hover:text-pink-700 transition duration-300" />
  </motion.div>
);

//  PropTypes Validation
CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function Decor() {
  const filterData = list.filter((data) => data.category === "free");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Essential Mandap Decor</h1>
        <p>
          Explore the key elements that make a mandap stunning and elegant. From floral arrangements and drapes to
          decorative pillars and lighting, these essentials bring tradition and beauty to every wedding setup. Browse
          our collection for inspiration!
        </p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Decor;
