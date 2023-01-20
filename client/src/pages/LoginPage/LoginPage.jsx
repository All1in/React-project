import React, { useState } from 'react'
// import TextField from '@mui/material/TextField'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginSignIn from '../../components/LoginSignIn/LoginSignIn'
// import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const [visibleOrNot, setVisibleOrNot] = useState(false)

  const clicked = () => {
    setVisibleOrNot(!visibleOrNot)
  }

  return (
    <div>
      <LoginForm />
      <button onClick={clicked}> Click! </button>
      {visibleOrNot && <LoginSignIn />}
    </div>
  )
}

export default LoginPage
