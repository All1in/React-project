import React from 'react'
import { Paper } from '@mui/material'

const CarouselItem = (props) => {
  const { item } = props
  return (
    <Paper>
      <img
        src={item.imageUrl}
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      />
    </Paper>
  )
}
export default CarouselItem
