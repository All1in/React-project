import React from 'react'
import { Box, Typography, ListItem, List, Link } from '@mui/material'
import footerHelpInfoStyles from './Style'

const FooterHelpInfo = () => {
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
            <Typography variant="h3" sx={footerHelpInfoStyles.h4}>
              ПОМОЩЬ
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Оплата
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Доставка
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding={true} sx={{ pt: 4 }}>
          <Link href="#" sx={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={footerHelpInfoStyles.p}>
              Возврат
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default FooterHelpInfo
