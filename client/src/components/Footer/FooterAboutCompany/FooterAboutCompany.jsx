import React from 'react'
import { Box, Typography, ListItem, List, Link } from '@mui/material'

import footerAboutCompanyStyles from './Style'

const FooterAboutCompany = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#000000',
      }}
    >
      <List sx={{ paddingTop: 0 }}>
        <ListItem disablePadding={true}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h3" sx={footerAboutCompanyStyles.h4}>
              ДЕЛТА СПОРТ
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              О компании
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              Магазины
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerAboutCompanyStyles.p}>
              Карьера
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default FooterAboutCompany
