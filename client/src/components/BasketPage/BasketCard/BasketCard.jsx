import * as React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { basketCardStyle, theme } from './Style'
import { ThemeProvider } from '@mui/material/styles'
// import axios from 'axios'
import { useCart } from '../../../hooks/useCart'
// import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addProductToTheCart,
  decreaseQuantityOfProducts,
  removeProduct,
} from '../../../redux/reducers/CartReducer/CartSlice'
import {
  addCartItems,
  decreaseQuantity,
  deleteCartItems,
} from '../../../redux/reducers/CartReducer/ActionCreator'

function BascetCard({ productInShop }) {
  const { cartQuantity, product } = productInShop
  const { name, brand, currentPrice, quantity, imageUrls, _id } = product
  console.log(product)
  // const { actualToken } = useCart()
  const dispatch = useDispatch()

  const addProductToCart = () => {
    dispatch(addCartItems(_id))
  }

  const deleteProduct = () => {
    dispatch(deleteCartItems(_id))
  }

  const decreaseQuantityOfProducts = () => {
    dispatch(decreaseQuantity(_id))
  }

  return (
    <Grid item>
      <Card style={{ maxWidth: 545, width: '100vw' }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              height="120"
              image={imageUrls[0]}
              alt="#"
            />
          </Grid>
          <Grid item>
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="h5" sx={basketCardStyle.h5_1}>
                  {name} /
                </Typography>
              </ThemeProvider>
              <Typography sx={basketCardStyle.h5_2}>
                {brand}/ {currentPrice}₴
              </Typography>
              <Typography>Quantity : {quantity}</Typography>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xl={6}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid>
                      <Button>
                        <RemoveIcon
                          onClick={decreaseQuantityOfProducts}
                          fontSize="small"
                        />
                      </Button>
                    </Grid>
                    <Grid>
                      <Box style={basketCardStyle.box} textAlign={'center'}>
                        <Typography>{cartQuantity}</Typography>
                      </Box>
                    </Grid>
                    <Grid>
                      <Button>
                        <AddIcon onClick={addProductToCart} fontSize="small" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={6}>
                  <CardActions>
                    <Button size="small">
                      <ClearIcon
                        onClick={deleteProduct}
                        color="#000000"
                        size={'2px'}
                        style={{ fontSize: 19 }}
                      />
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default BascetCard
