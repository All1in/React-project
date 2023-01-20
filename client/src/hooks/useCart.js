import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItems } from '../redux/reducers/CartReducer/ActionCreator'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const useCart = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutFunc = (event) => {
    event.preventDefault()
    auth.logout()
    auth.isAuthenticated = false
    navigate('/login')
  }

  const infoAboutUser = localStorage.getItem(`InfoAboutUser`)
  const parsed = JSON.parse(infoAboutUser)
  const actualToken = parsed.token

  const dispatch = useDispatch()
  const { itemsInCart, isCartLoading, cartError } = useSelector(
    (state) => state.cartReducer
  )

  useEffect(() => {
    dispatch(cartItems())
  }, [dispatch])

  return {
    itemsInCart,
    actualToken,
    isCartLoading,
    cartError,
    logoutFunc,
  }
}
