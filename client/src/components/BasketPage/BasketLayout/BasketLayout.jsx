import { Button, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { basketLayoutStyle } from './Style'
import ClearIcon from '@mui/icons-material/Clear'
import BasketProductList from '../BasketProductList/BasketProductList'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const BasketLayout = () => {
  const cardShow = false

  return (
    <Grid container style={basketLayoutStyle.div}>
      <Grid style={basketLayoutStyle.div2}>
        <Grid
          container
          rowSpacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid xs={5}>
            <Typography variant="h3" style={basketLayoutStyle.h3}>
              КОРЗИНА
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Button>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <ShoppingBasketIcon />
                {/* Должнв быть иконка из хедера с ссылкой на расширенную страницу где будут все товары */}
              </Link>
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button>
              <ClearIcon
                color="#000000"
                size={'2px'}
                style={{ fontSize: 39 }}
              />
            </Button>
          </Grid>
          {cardShow ? (
            <Grid container xl={12} rowSpacing={12}>
              <Typography variant="string" style={basketLayoutStyle.p}>
                Ваша корзина пуста.
              </Typography>
            </Grid>
          ) : (
            <Grid container xl={12} rowSpacing={12}>
              <BasketProductList />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" style={basketLayoutStyle.button}>
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </Grid>
    </Grid>
  )
}

export default BasketLayout
