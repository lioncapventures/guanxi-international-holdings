import React from "react";
import Slider from "react-slick";
import "./BrandsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 // Custom styles for the carousel

const brands = [
  "INTEL",
  "AMD",
  "NVIDIA",
  "WD",
  "SEAGATE",
  "SAMSUNG",
  "CRUCIAL",
  "KINGSTON",
  "DELL-EMC",
  "HPE",
  "IBM",
  "SUPERMICRO",
  "SYNOLOGY",
];

const BrandsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // For tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="brands-carousel-container">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brand-slide">
            <h3>{brand}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsCarousel;

