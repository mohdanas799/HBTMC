// import React, { useState, useRef, useEffect } from 'react';
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://i.ibb.co/JpJ0gRy/Rectangle-239.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-240.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-241.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-242.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-243.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-244.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-245.png',
  'https://i.ibb.co/JpJ0gRy/Rectangle-246.png',
];

const Gallery = () => {
  // Separate refs for both sliders
  const sliderRef1 = React.useRef(null);
  const sliderRef2 = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    // Trigger prev on both sliders
    sliderRef1.current.slickPrev();
    sliderRef2.current.slickPrev();
  };

  const handleNext = () => {
    // Trigger next on both sliders
    sliderRef1.current.slickNext();
    sliderRef2.current.slickNext();
  };

  return (
    <div className="w-full container mx-auto p-4 px-4 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Gallery</h1>
        <div className="flex gap-4">
          {/* Combined slider buttons */}
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-white text-xl" />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handleNext}
          >
            <FaChevronRight className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* First Slider */}
      <Slider ref={sliderRef1} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden border-2 border-transparent rounded-lg">
              <img
                src={image}
                // alt={Thumbnail ${index + 1}}
                className="w-full h-48 sm:h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Second Slider */}
      <Slider ref={sliderRef2} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden border-2 border-transparent rounded-lg">
              <img
                src={image}
                // alt={Thumbnail ${index + 1}}
                className="w-full h-48 sm:h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;