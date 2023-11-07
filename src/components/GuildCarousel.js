import React, { useState } from "react";

const GuildCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={goToPrevImage}>
        &lt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Ninja Card ${currentImageIndex}`}
      />
      <button className="next-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default GuildCarousel;
