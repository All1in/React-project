import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import Button from '../Button/Button'
import { Box, Container } from '@mui/system'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MainCarousel = () => {
  const items = [
    {
      image:
        'https://media.discordapp.net/attachments/1043545360498442271/1043545432682401853/Rectangle_7.jpg',
      alt: `news`,
    },
    {
      image:
        'https://media.discordapp.net/attachments/1043545360498442271/1043545433013760080/Rectangle_76.jpg',
      alt: `news`,
    },
  ]

  const styleForBtn = {
    margin: '25px',
    float: 'right',
    width: '150px',
    height: '44px',
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '-3px 3px 4px #00FF38',
    fontSize: '22px',
    fontWeight: '700',
    borderRadius: '0',
    lineHeight: `22px`,
    padding: `8px 26px`,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white',
    },
  }

  return (
    <Container
      maxWidth={`100%`}
      sx={{
        position: 'relative',
      }}
    >
      <Carousel
        PrevIcon={<ArrowBackIosNewIcon fontSize="large" />}
        NextIcon={<ArrowForwardIosIcon fontSize="large" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            color: 'black',
            opacity: 1,
            borderRadius: 0,
            marginLeft: 150,
            marginRight: 150,
            paddingTop: 18,
            paddingBottom: 18,
            paddingLeft: 22,
            paddingRight: 22,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            display: 'none',
          },
        }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
      <Box
        sx={{
          position: 'absolute',
          right: 150,
          top: 500,
          width: 500,
          height: 250,
          background: ' rgba(0, 0, 0, 0.25)',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            margin: `20px 0`,
            textAlign: 'center',
            fontSize: 45,
            color: '#fff',
            textShadow: '0px 5px 4px rgba(0, 0, 0, 0.55)',
          }}
        >
          НОВАЯ КОЛЛЕКЦИЯ СОВМЕСТНО В VISA
        </h1>
        <Button buttonContent={styleForBtn} title={`КУПИТЬ`}></Button>
      </Box>
    </Container>
  )
}
export default MainCarousel
