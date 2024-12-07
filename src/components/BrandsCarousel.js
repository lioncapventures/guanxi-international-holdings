// import React from "react";
// import Slider from "react-slick";

// const BrandsCarousel = () => {
//   const settings = {
//     dots: false, // Disable dots
//     infinite: true, // Loop through items
//     speed: 500,
//     slidesToShow: 5, // Number of items to display
//     slidesToScroll: 1, // Scroll one item at a time
//     arrows: false, // Disable navigation arrows
//   };

//   return (
//     <Slider {...settings}>
//       <div className="brand">Intel</div>
//       <div className="brand">AMD</div>
//       <div className="brand">NVIDIA</div>
//       <div className="brand">(WD)</div>
//       <div className="brand">Seagate</div>
//       <div className="brand">Samsung</div>
//       <div className="brand">Crucial</div>
//       <div className="brand">Kingston</div>
//       <div className="brand">Dell EMC</div>
//       <div className="brand">(HPE)</div>
//       <div className="brand">IBM</div>
//       <div className="brand">Supermicro</div>
//       <div className="brand">Synology</div>
//     </Slider>
//   );
// };

// export default BrandsCarousel;
import React from "react";
import Slider from "react-slick";
import "./BrandsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 // Custom styles for the carousel

const brands = [
  "Intel",
  "AMD",
  "NVIDIA",
  "WD",
  "Seagate",
  "Samsung",
  "Crucial",
  "Kingston",
  "Dell EMC",
  "HPE",
  "IBM",
  "Supermicro",
  "Synology",
];

const BrandsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
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

