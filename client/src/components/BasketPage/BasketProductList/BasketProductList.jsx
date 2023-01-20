import { Box, Grid } from '@material-ui/core'
import React from 'react'
import BascetCard from '../BasketCard/BasketCard'

const BasketProductList = () => {
  return (
    <Box sx={{ marginTop: '3rem' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xl={12}
        spacing={2}
      >
        <BascetCard />
        <BascetCard />
      </Grid>
    </Box>
  )
}

export default BasketProductList
