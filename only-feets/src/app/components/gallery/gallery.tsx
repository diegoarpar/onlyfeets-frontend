import "./css.css";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ images}) => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={`/images/${img}`} alt={`Slide ${index}`} className="w-full h-auto rounded-xl" />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Gallery;