import "./css.css";
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
    vertical: true,
    autoplaySpeed: 3000,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div>
      <div className="w-90 max-w-3xl mx-auto">
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