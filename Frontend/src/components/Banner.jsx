import { useState, useEffect } from "react";

const images = [
  "/public/Banner.png",
  "/public/Banner2.png",
  "/public/Banner3.png",
  "/public/Banner4.png",
  "/public/Banner5.png"
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        {/* Left Section */}
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-4 md:mt-20'>
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome to experience  
              <span className="text-pink-500"> exquisite mandap decorations! </span>
            </h1>
            <p className="text-sm md:text-xl">
              At New Rajdhani Mandap Manufacturer, we create beautiful mandaps that blend tradition and elegance.
              Whether classic, modern, or theme-based, our designs make your special moments unforgettable!
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        {/* Right Section (Image Slider) */}
        <div className='order-1 w-full mt-5 md:w-1/2'>
          <img 
            src={images[currentIndex]} 
            className="md:w-[600px] md:h-[550px] md:ml-12 mt-0 transition-opacity duration-500" 
            alt={`Banner ${currentIndex + 1}`} 
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
