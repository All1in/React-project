import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Badge,
} from '@mui/material/'
import Logo from './components/logoSvg'

import { HeaderLinks, IconsButtonContainer } from './components/styles'
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material'

import { useCart } from '../../hooks/useCart'
import { AuthContext } from '../../context/AuthContext'
import { useDispatch } from 'react-redux'
import { cartItems } from '../../redux/reducers/CartReducer/ActionCreator'

const Header = () => {
  const { itemsInCart, isCartLoading, logoutFunc } = useCart()
  const { products } = itemsInCart

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(cartItems())
  // }, [dispatch])

  const linksAndDescription = [
    { link: '/men', description: 'men' },
    { link: '/women', description: 'women' },
    { link: '/children', description: 'children' },
    { link: '/brands', description: 'brands' },
    { link: '/news', description: 'news' },
  ]

  return (
    <>
      <AppBar>
        <Container
          sx={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '1.25em',
          }}
        >
          <Link to={'/'}>
            <Logo />
          </Link>
          <HeaderLinks>
            {linksAndDescription.map((element) => {
              const { link, description } = element
              return (
                <Link key={link} to={link} style={{ textDecoration: 'none' }}>
                  <Typography variant="body">{description}</Typography>
                </Link>
              )
            })}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography onClick={logoutFunc} variant="body">
                Logout
              </Typography>
            </Link>
          </HeaderLinks>
          <IconsButtonContainer
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton component={Link} to="/#">
              <Tooltip>
                <PersonOutlined sx={{ color: 'primary.contrastText' }} />
              </Tooltip>
            </IconButton>
            <IconButton
              sx={{ color: 'primary.contrastText' }}
              component={Link}
              to="/wishlist"
            >
              <Badge
                badgeContent={1}
                color="secondary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <FavoriteBorderOutlined />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: 'primary.contrastText' }}
              component={Link}
              to="/cart"
            >
              <Badge
                badgeContent={products?.length}
                color="secondary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <ShoppingBagOutlined />
              </Badge>
            </IconButton>
          </IconsButtonContainer>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
