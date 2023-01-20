import { createTheme } from '@mui/material/styles'

export const basketCardStyle = {
  h5_1: {
    fontSize: '15px',
    textAlign: 'center',
    fonWeight: '400',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursorPointer: 'none',
  },
  h5_2: {
    fontSize: '15px',
    textAlign: 'center',
    fonWeight: '400',
    textDecoration: 'none',
    cursorPointer: 'none',
  },
  p: {
    fontSize: '15x',
    textAlign: 'center',
    fonWeight: '400',
    textDecoration: 'none',
    cursorPointer: 'none',
    color: '#727171',
  },
  box: {
    border: '0.5px solid #000000',
    width: '45px',
    height: '21px',
  },
}

export const theme = createTheme({
  typography: {
    h5: {
      fontSize: '15px',
      textAlign: 'center',
      fonWeight: '400',
      textDecoration: 'none',
      textTransform: 'uppercase',
      cursorPointer: 'none',
      color: '#727171',
    },
  },
})
