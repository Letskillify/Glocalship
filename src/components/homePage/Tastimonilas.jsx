import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Tastimonilas = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'Small Business Owner',
      content: 'The fastest parcel delivery service I\'ve ever used. Package arrived before expected!',
      rating: 5,
      image: 'https://placehold.co/100x100?text=James+W&font=roboto'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'E-commerce Store Manager',
      content: 'Reliable and affordable. Our shipping costs dropped by 30% with their bulk discounts.',
      rating: 5,
      image: 'https://placehold.co/100x100?text=Maria+G&font=roboto'
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Frequent Shipper',
      content: 'Excellent tracking system and friendly customer support. Highly recommend!',
      rating: 4,
      image: 'https://placehold.co/100x100?text=David+K&font=roboto'
    },
    {
      id: 4,
      name: 'Lisa Choky',
      role: 'Online Seller',
      content: 'Excellent tracking system and friendly customer support. Highly recommend!',
      rating: 5,
      image: 'https://placehold.co/100x100?text=David+K&font=roboto'
    },
    {
      id: 5,
      name: 'Chin Yuon',
      role: 'Online Seller',
      content: 'Excellent tracking system and friendly customer support. Highly recommend!',
      rating: 5,
      image: 'https://placehold.co/100x100?text=David+K&font=roboto'
    },
    {
      id: 6,
      name: 'Advert Johnson',
      role: 'Online Seller',
      content: 'Excellent tracking system and friendly customer support. Highly recommend!',
      rating: 5,
      image: 'https://placehold.co/100x100?text=David+K&font=roboto'
    },
  ];

const Testimo = () => {

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (

       <div className="testimonial-container">
      <h1 className="section-title">Testimonials</h1>
      <div className="section-underline"></div>
      <div className="testimonial-slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={`Portrait of ${testimonial.name}`} />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>

      </div>
    </div>
  )
}

export default Tastimonilas
