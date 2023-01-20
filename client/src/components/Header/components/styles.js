import { Popper, Input, Box, Dialog } from '@mui/material'
import { styled } from '@mui/material/styles'
// import { Link } from 'react-router-dom'

export const HeaderLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '50%',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
export const IconsButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '15%',
  [theme.breakpoints.down('md')]: {
    width: '15%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '30%',
  },
}))
