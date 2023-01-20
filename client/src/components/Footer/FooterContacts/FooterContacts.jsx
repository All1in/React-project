import React from 'react'
import { Box, Typography, ListItem, List, Grid } from '@mui/material'
import footerContactsStyles from './Style'
import InstagramComponent from './images/Instagram'
import FacebookComponent from './images/Facebook'

const FooterContacts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#000000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '140px',
        }}
      >
        <Grid container spacing={2} sx={{ margin: 'none' }}>
          <Grid item xl={12} md={12} sx={{ paddingBottom: '32px' }}>
            <Typography variant="h3" sx={footerContactsStyles.h4}>
              МЫ В СЕТИ
            </Typography>
          </Grid>
          <Grid item lg={6} md={6}>
            <a href="#" target="blank">
              <InstagramComponent />
            </a>
          </Grid>
          <Grid item lg={6} md={6}>
            <a href="#" target="blank">
              <FacebookComponent />
            </a>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default FooterContacts
