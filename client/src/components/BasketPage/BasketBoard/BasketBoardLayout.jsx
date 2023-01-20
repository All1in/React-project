import { Box, Button, Grid, Link, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import BascetCard from '../BasketCard/BasketCard'
import { useNavigate } from 'react-router-dom'
import BascetBorderLayoutStyle from './Style'
import { useCart } from '../../../hooks/useCart'
import Preloader from '../../Preloader/Preloader'
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent'
import { cartItems } from '../../../redux/reducers/CartReducer/ActionCreator'
import { useDispatch } from 'react-redux'

const BascetBorderLayout = () => {
  const navigate = useNavigate()
  const { itemsInCart, isCartLoading, cartError } = useCart()
  const { _id, customerId, products } = itemsInCart
  console.log('itemsInCart: ', itemsInCart)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(cartItems())
  // }, [dispatch])

  const redirectToMain = () => {
    navigate('/')
  }

  if (!products?.length) return <h1>Card is Empty</h1>

  return (
    <>
      {isCartLoading && <Preloader />}
      {cartError && <ErrorComponent error={cartError} />}
      <Box sx={BascetBorderLayoutStyle.div}>
        <Typography variant="h2" style={BascetBorderLayoutStyle.h2}>
          КОРЗИНА
        </Typography>
      </Box>
      <Box style={BascetBorderLayoutStyle.wrapper}>
        <Box mt={3} ml={2} mb={4}>
          <Typography variant="h4" style={BascetBorderLayoutStyle.h4}>
            Ваши товары:
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={1}
        >
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              {products?.map((productInShop, index) => {
                return (
                  <Grid key={index} item xl={6} lg={6} md={6} sn={12}>
                    <BascetCard productInShop={productInShop} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Box mt={7} mb={7}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Box pr={1} pl={1} pt={2} pb={2}>
                    <Link href="" sx={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        style={BascetBorderLayoutStyle.button}
                        onClick={redirectToMain}
                      >
                        Ввернуться на главную
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Box pr={1} pl={1} pt={2} pb={2}>
                    <Link href="#" sx={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        style={BascetBorderLayoutStyle.button}
                      >
                        Оформить заказ
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BascetBorderLayout
