import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

export const footerMobileVersionStyles = {
  p: {
    fontSize: '1.1rem',
    fontStyle: 'Regular',
    textAlign: 'center',
    fonWeight: '400',
    textDecoration: 'none',
    color: '#868686',
    '&:hover': {
      color: '#FFFFFF',
    },
  },
}

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '1.1rem', color: '#FFFFFF' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0)' : 'rgba(0, 0, 0)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    color: '#00FF38',
    fontStyle: 'Regular',
    textTransform: 'uppercase',
    cursorPointer: 'none',
  },
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0)',
}))
