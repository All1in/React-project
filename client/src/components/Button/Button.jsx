import React from 'react'
import MuiButton from '@mui/material/Button'

const Button = ({ buttonContent, title, onClick }) => {
  return (
    <>
      <MuiButton onClick={onClick} sx={buttonContent}>
        {title}
      </MuiButton>
    </>
  )
}

export default Button
