import React from 'react'
import theme from './Style'
import { Box, ThemeProvider, Typography } from '@mui/material'

const FooterShopInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          maxHeight: 90,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">
          ОБРАБОТКА ONLINE-ЗАКАЗОВ И ЗАЯВОК НА ОБРАТНЫЙ ЗВОНОК ОСУЩЕСТВЛЯЕТСЯ
          ПН-ПТ: С 10:00 ДО 18:00 СБ-ВС: С 11:00 ДО 16:00
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default FooterShopInfo
