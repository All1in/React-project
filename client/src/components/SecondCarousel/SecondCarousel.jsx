import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Container } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './SecondCarousel.scss'

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <ArrowForwardIosIcon fontSize="50px" />
    </div>
  )
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <ArrowBackIosNewIcon fontSize="50px" />
    </div>
  )
}

const SecondCarousel = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  // console.log('items', items)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }

  return (
    <Container>
      <div className="container">
        <div className="slider">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                className={
                  index === slideIndex ? 'slide slide-active' : 'slide'
                }
                key={index}
              >
                <img src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  )
}

export default SecondCarousel
