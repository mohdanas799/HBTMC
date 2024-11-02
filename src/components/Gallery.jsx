// // Gallery.js
// import React, { useState } from 'react';

// const images = [
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
//   './public/Rectangle 239.png',
// ];

// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full p-4  px-20">
//       <h1 className="text-4xl font-bold mb-8">Our Gallery</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`overflow-hidden border-2 ${
//               currentIndex === index ? 'border-blue-500' : 'border-transparent'
//             } rounded-lg cursor-pointer`}
//             onClick={() => setCurrentIndex(index)}
//           >
//             <img
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               className="w-full h-60 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;



// Gallery.js
import React, { useState } from 'react';

const images = [
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
  './public/Rectangle 239.png',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full p-4 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden border-2 transition-transform duration-300 ${
              currentIndex === index ? 'border-blue-500 scale-105' : 'border-transparent'
            } rounded-lg cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-48 sm:h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
