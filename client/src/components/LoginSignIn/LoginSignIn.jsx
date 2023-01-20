import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFetching } from '../../hooks/useFetching'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginSignIn = () => {
  const [loginForm, setLoginForm] = useState({
    loginOrEmail: '',
    password: '',
  })
  const { loading, request, error, clearError } = useFetching()
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  useEffect(() => {
    // console.log(error)
    clearError()
  }, [error, clearError])

  const toSubmit = (event) => {
    event.preventDefault()
  }

  const changeLoginValues = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
  }

  const loginUser = async () => {
    try {
      const data = await request('/api/customers/login', 'POST', {
        ...loginForm,
      })
      console.log(data.token)
      auth.login(data.token)
      navigate('/')
      setLoginForm({ loginOrEmail: '', password: '' })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form onSubmit={toSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              id="name-input"
              name="loginOrEmail"
              label="Enter your email or login"
              type="text"
              value={loginForm.loginOrEmail}
              onChange={changeLoginValues}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="password"
              label="Enter your password"
              type="text"
              value={loginForm.password}
              onChange={changeLoginValues}
            />
          </Grid>
          <Button
            style={{ marginTop: '35px' }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={loginUser}
            disabled={loading}
          >
            Sign In
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default LoginSignIn
