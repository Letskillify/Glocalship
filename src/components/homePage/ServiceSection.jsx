import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/assets/img/services/delivery-2.jpg",
    title: "Real-Time Tracking",
  },
  {
    image: "/assets/img/services/delivery-3.jpg",
    title: "Secure Packaging",
  },
  {
    image: "/assets/img/services/delivery-4.jpg",
    title: "Shipping",
  },
  {
    image: "/assets/img/services/delivery-5.jpg",
    title: "Customer Support",
  },
];

function ServiceSection() {
const settings = {
  dots: false,
  infinite: true,
  speed: 9000,
  cssEase: "linear",  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,        
  pauseOnHover: false,
  arrows: false, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
  return (
    <div className="slider-section">
      <h2 className="slider-heading">Our Services</h2>
      <div className="slider-wave"></div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="slide-card">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                  <p className="overlay-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ServiceSection;
