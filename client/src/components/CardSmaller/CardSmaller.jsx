import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import PropTypes from 'prop-types'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SaleBlock from '../UI/SaleBlock/SaleBlock'
import ActualPrice from '../UI/ActualPrice/ActualPrice'
import styles from './CardSmaller.module.scss'

const CardSmaller = (props) => {
  const {
    currentPrice,
    categories,
    imageUrls,
    name,
    redirectToCard,
    previousPrice,
  } = props

  const addItemsToFav = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={redirectToCard} className={styles.container}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${imageUrls[3]}`}
            alt="green iguana"
          />
          <CardContent>
            <FavoriteBorderIcon onClick={addItemsToFav} />
            <Typography gutterBottom variant="h5" component="div">
              {name} {categories}
              {previousPrice && <SaleBlock />}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>{currentPrice}₴</span>
              {previousPrice ? (
                <ActualPrice previousPrice={previousPrice} />
              ) : (
                previousPrice
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

CardSmaller.propTypes = {
  brand: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  imageUrls: PropTypes.array.isRequired,
  isCardsLoading: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  view: PropTypes.bool.isRequired,
}

CardSmaller.defaultProps = {
  element: 'Posts',
  brand: 'Nike',
  currentPrice: 7000,
  categories: 'for men',
  imageUrls: [],
  isCardsLoading: false,
}

export default CardSmaller
