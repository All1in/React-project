import React from 'react'
import Typography from '@mui/material/Typography'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './ModalElement.module.scss'
import PropTypes from 'prop-types'
// import BascetCard from '../BasketPage/BasketCard/BasketCard'
import { useCart } from '../../hooks/useCart'

const ModalElement = ({ handleClose, cardContentProps, title }) => {
  const { imageUrls, name, currentPrice } = cardContentProps
  const { itemsInCart, isCartLoading } = useCart()
  const { products } = itemsInCart

  console.log(itemsInCart)

  const styleForTitle = {
    color: '#3F3F3F',
    textTransform: 'upperCase',
    fontsize: '25px',
  }

  return (
    <div className={styles.modalContainer} onClick={handleClose}>
      <div className={styles.crossContainer}>
        <Typography sx={styleForTitle}>{title}</Typography>
        <ClearIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
      </div>
      {products.map((shopItem, index) => {
        const { cartQuantity, product } = shopItem
        const { name, imageUrls, currentPrice } = product
        return (
          <div key={index} className={styles.mainContainer}>
            <div className={styles.modalImgContainer}>
              <img className={styles.imageOfProduct} src={imageUrls[0]} />
            </div>
            <div className={styles.descriptionContainer}>
              <Typography> {name} </Typography>
              <Typography> {currentPrice} </Typography>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ModalElement.propTypes = {
  handleClose: PropTypes.func.isRequired,
  cardContentProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

ModalElement.defaultProps = {
  title: 'Cart',
}

export default ModalElement
