import 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto pt-[80px] px-4 md:px-8 lg:px-16 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">About Mandapmart</h1>
      <p className="text-lg  mb-4">
        Mandapmart is a leading supplier of premium-quality mandap decorations for weddings and events. 
        With years of experience in the industry, we specialize in creating elegant, traditional, 
        and contemporary mandap setups that bring dreams to life.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-lg ">
        Our mission is to provide beautiful and customizable mandap solutions that enhance 
        every special occasion. We focus on quality, creativity, and customer satisfaction.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-lg ">
        <li>Premium materials and craftsmanship</li>
        <li>Customizable designs to match any theme</li>
        <li>Affordable pricing with top-notch service</li>
      </ul>
    </div>
  );
};

export default About;
