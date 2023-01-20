import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFetching } from '../../hooks/useFetching'
// import { AuthContext } from '../../context/AuthContext'

const Form = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    login: '',
  })
  const { loading, request, error, clearError } = useFetching()
  // const auth = useContext(AuthContext)

  useEffect(() => {
    // console.log(error)
    clearError()
  }, [error, clearError])

  const changeValue = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const toSubmit = (event) => {
    event.preventDefault()
  }

  const registerUser = async () => {
    try {
      const data = await request('/api/customers', 'POST', {
        ...formValues,
      })
      setFormValues({
        email: '',
        firstName: '',
        password: '',
        login: '',
        lastName: '',
      })
      // console.log(data.message)
    } catch (e) {}
  }

  return (
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
            name="firstName"
            label="First Name"
            type="text"
            value={formValues.firstName}
            onChange={changeValue}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="lastName"
            label="Last Name"
            type="text"
            value={formValues.lastName}
            onChange={changeValue}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="login"
            label="login"
            type="email"
            value={formValues.login}
            onChange={changeValue}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={changeValue}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
            onChange={changeValue}
          />
        </Grid>
        <Button
          style={{ marginTop: '35px' }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={registerUser}
          disabled={loading}
        >
          Create User
        </Button>
      </Grid>
    </form>
  )
}
export default Form
