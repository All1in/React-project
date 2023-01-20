import { createTheme } from '@mui/material/styles'
const theme = createTheme()

theme.typography.h4 = {
  fontSize: '1.25rem',
  fontStyle: 'Regular',
  textAlign: 'center',
  margin: 'auto',
  fonWeight: '400',
  maxWidth: '880px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '0.95rem',
    padding: '1% 1% 0% 1%',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '0.6rem',
    padding: '1% 2% 0% 2%',
    textAlign: 'center',
  },
}

export default theme
