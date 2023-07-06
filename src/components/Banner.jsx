import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const data = [
    "https://i.ibb.co/mNRPh7z/1.png",
    "https://i.ibb.co/bJ55Wsp/4.png",
    "https://cdn.dribbble.com/users/2331173/screenshots/14507345/media/00667a9243309c3fb6bc256cd1231021.jpg",
    "https://i.ibb.co/PmcjZXT/3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img className="transition-opacity duration-500 ease-in-out ml-20 mt-12 w-[1200px] h-[500px] rounded-2xl" src={data[currentImageIndex]} alt="Slider" />

    </div>
  );
};

export default Banner;





