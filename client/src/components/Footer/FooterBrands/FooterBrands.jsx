import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
// import { Link } from 'react-router-dom'
import footerBrandStyles from './Style'
import AdidasComponent from './images/Adidas'
import NikeComponent from './images/Nike'
import VansComponent from './images/Vans'
import PumaComponent from './images/Puma'
import NewBalanceComponent from './images/NewBalance'
import JordanBrandComponent from './images/JordanBrand'

const FooterBrands = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#000000',
        alignItems: 'flex-start',
      }}
    >
      <Grid container spacing={0}>
        <Grid item lg={12} md={12} sm={12} sx={{ paddingBottom: '32px' }}>
          <Typography variant="h3" sx={footerBrandStyles.h4}>
            БРЕНДЫ
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <AdidasComponent />
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <NikeComponent />
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <VansComponent />
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <PumaComponent />
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <NewBalanceComponent />
        </Grid>
        <Grid item lg={4} md={4} sm={6} style={{ textAlign: 'center' }}>
          <JordanBrandComponent />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterBrands
