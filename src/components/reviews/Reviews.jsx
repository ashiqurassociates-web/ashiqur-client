import './Reviews.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import SliderContent from './SliderContent';
import { motion } from 'framer-motion'

const reviewData = [
  {
    img: '/reviewp1.jpg',
    review: "Ashiqur Rahman & Associates provided exceptional legal guidance for our corporate matters. Their team's professionalism, attention to detail, and commitment to achieving the best results were remarkable. I highly recommend their services.",
    name: 'Rana Karim',
    position: 'Corporate Executive'
  },
  {
    img: '/reviewp2.jpg',
    review: "The firm's expertise and strategic approach helped me resolve a complex legal issue efficiently. They were responsive, thorough, and truly dedicated to ensuring a favorable outcome. Working with them was a seamless experience.",
    name: 'Farhan Hossain',
    position: 'Entrepreneur'
  },
  {
    img: '/reviewp3.jpg',
    review: "I am grateful for the professional support provided by Ashiqur Rahman & Associates. Their clear guidance, in-depth knowledge, and client-focused approach made navigating my legal matter stress-free and effective.",
    name: 'Sadia Rahman',
    position: 'Individual Client'
  },
];


const Reviews = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <div className="review-main">
      <div
        className="review">
        <h1>Client Testimonials</h1>
        <Slider {...settings} className="slider">
          {reviewData.map((review, i) => (
            <SliderContent review={review} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews