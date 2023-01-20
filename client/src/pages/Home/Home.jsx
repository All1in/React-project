import React, { useEffect, useState } from 'react'
import MainCarousel from '../../components/Carousel/MainCarousel'
import Footer from '../../components/Footer/FooterMainStructure/Footer'
import SecondCarousel from '../../components/SecondCarousel/SecondCarousel'
import SlidesService from '../../API/SlidesService'
import { useLoading } from '../../hooks/useLoading'
import Preloader from '../../components/Preloader/Preloader'
// import Header from '../components/Header/Header'

const trainers = [
  'https://cdn.discordapp.com/attachments/1043545360498442271/1044073816458010685/Rectangle_15.jpg',
  'https://cdn.discordapp.com/attachments/1043545360498442271/1044073959219548220/Rectangle_16.jpg',
  'https://cdn.discordapp.com/attachments/1043545360498442271/1044074426523713606/imgonline-com-ua-Resize-W5qKpKMDqd.jpg',
  'https://cdn.discordapp.com/attachments/1043545360498442271/1044074426523713606/imgonline-com-ua-Resize-W5qKpKMDqd.jpg',
]

const Home = () => {
  const [slide, setSlide] = useState([])
  const [getSlide, isSlideLoads, slideError] = useLoading(async () => {
    const response = await SlidesService.getSlides()
    response.map((trainers) => {
      const { imageUrl } = trainers
      setSlide([...slide, ...imageUrl])
    })
  })

  useEffect(() => {
    getSlide()
  }, [])

  return (
    <div>
      {isSlideLoads ? <Preloader /> : <MainCarousel />}
      {isSlideLoads ? <Preloader /> : <SecondCarousel items={trainers} />}
      <Footer />
    </div>
  )
}

export default Home
