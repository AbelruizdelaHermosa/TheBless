import React, { useState, useEffect } from 'react';

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = images.length;
  const slideDuration = 5000;
  const isMobile = window.innerWidth <= 768; // Consideramos dispositivos con un ancho menor o igual a 768px como móviles

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [imageCount, slideDuration]);

  return (
    <div className={`relative w-full ${isMobile ? 'h-56' : 'h-full'}`}> {/* Ajuste de altura para dispositivos móviles */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute inset-0 w-full h-full object-contain transition-transform duration-500 ${isMobile ? 'sm:h-36' : ''} ${
            index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: index === images.length - 1 ? 10 : 1 }}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;

