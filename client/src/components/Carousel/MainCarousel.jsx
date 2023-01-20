import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import HomeIcon from '@mui/icons-material/Home'
import { useLoading } from '../../hooks/useLoading'
import SlidesService from '../../API/SlidesService'
// import styles from './MainCarousel.module.scss'

const MainCarousel = () => {
  // const items = [
  //   {
  //     id: 1,
  //     name: 'Random Name #1',
  //     image: 'https://i.insider.com/5b7439f21982d822008b5136?width=700',
  //   },
  //   {
  //     id: 2,
  //     name: 'Random Name #2',
  //     image:
  //       'https://blog.hollywoodbets.net/wp-content/uploads/2022/09/Brazil.jpg',
  //   },
  // ]
  const carouselItem = [
    {
      customId: 'promotion-women-clothing',
      imageUrl: 'https://i.insider.com/5b7439f21982d822008b5136?width=700',
      title: 'Nike',
      description: 'trainers',
    },
    {
      customId: 'promotion-women',
      imageUrl:
        'https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/1-1/J5cZ61KuVq.jpg?v=1.1&w=1024',
      title: 'trainers',
      description: 'Nike',
    },
  ]
  const [items, setItems] = useState(carouselItem)
  const [getCarousel, isCarouselLoads, CarouselError] = useLoading(async () => {
    const response = await SlidesService.getSlides()
    setItems(response)
    console.log(response)
  })

  useEffect(() => {
    getCarousel()
  }, [])

  return (
    <Carousel
      IndicatorIcon={<HomeIcon />}
      navButtonsProps={{
        style: {
          backgroundColor: 'black',
          borderRadius: 0,
        },
      }}
    >
      {items.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  )
}

export default MainCarousel
