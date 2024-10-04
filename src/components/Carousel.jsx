import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 4);
  };

  const slides = [
    {
      image: '/nikeShoeBox.webp',
      content: <Link to="/music">Listen to My Latest Track</Link>,
    },
    {
      video: '/copy_BB38F46D-2310-4D94-A4B1-0C263C5E1AA5.mov',
      content: <Link to="/videos">Watch My Latest Video</Link>,
    },
    {
      image: '/AciebabyyMerch.webp',
      content: <Link to="/shop">Check Out My Merch</Link>,
    },
    {
      image: '/AciebabyyCommunity.webp',
      content: <Link to="/signup">Join the Community</Link>,
    },
  ];

  const currentSlide = slides[currentIndex];

  return (
    <div className="carousel">
      {currentSlide.video ? (
        <video src={currentSlide.video} controls />
      ) : (
        <img src={currentSlide.image} alt="Carousel Slide" />
      )}
      <div className="carousel-content">{currentSlide.content}</div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
