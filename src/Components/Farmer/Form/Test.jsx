import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Enable auto-play
        autoplaySpeed: 5000 ,    // Slide duration in milliseconds
        arrows:false
      };

  return (
    <div className='bg-[#F4F4F4] py-3'>
      
      <Slider {...settings}>
        <div>
            
          <h3>AAAH Award 2024 सम्बन्धमा । </h3>
        </div>
        <div>
          <h3 className='text-red-500 font-bold'>COVID 19 Intra Action Review 2022</h3>
        </div>
        <div>
        <h3 className='text-green-500 font-bold'>वित्तीय व्यवस्थापन गोष्ठी सम्बन्धमा ।</h3>
        </div>
        <div>
        <h3 className='text-yellow-500 font-bold'>Medical Korea e-Class सम्बन्धमा । </h3>
        </div>
        <div>
        <h3 className='text-blue-500 font-bold'>विपन्न नागरिक औषधि निर्देशिका, २०८० । </h3>
        </div>
        <div>
        <h3 className='text-purple-500 font-bold'>नेपाल स्वास्थ्य क्षेत्र रणनीतिक योजना (२०७९/८० - २०८७/८८)</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Test;
