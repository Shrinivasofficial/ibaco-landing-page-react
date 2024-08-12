import React from 'react';

export const Hero = () => {
  return (
    <div className="relative">
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-bold text-brown-700 mb-2 md:mb-4 -mt-16">
            Your Ice Cream Destiny
          </h1>
          <p className="text-gray-500 mb-4 mt-4 md:mb-6 md:mt-6 leading-relaxed">
            Ibaco Ice Cream delivers rich, creamy flavors with quality ingredients, offering a delightful indulgence in every bite.
          </p>
          <button className="bg-[#ec2d24] text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
            Discover More
          </button>
        </div>
       
       
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="https://www.ibaco.in/assets/img/products/Ibaco-Signature-Bars-home-new-1.png"
              alt="Ice Cream 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg row-span-2 col-span-1"
            />
            <img
              src="https://www.ibaco.in/assets/img/sundaes/Image-5.png"
              alt="Ice Cream 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg col-span-1 row-span-1"
            />
            <img
              src="https://www.ibaco.in/assets/img/sundaes/Image-30.png"
              alt="Ice Cream 3"
              className="w-full h-72 object-cover rounded-lg shadow-lg col-span-1 row-span-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
