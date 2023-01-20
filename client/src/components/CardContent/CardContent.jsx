import React, { useState } from 'react'
// import axios from 'axios'
import Typography from '@mui/joy/Typography'
import { Rating } from '@mui/material'
import Button from '../Button/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DropDown from '../DropDown/DropDown'
import SecondCarousel from '../SecondCarousel/SecondCarousel'
import Modal from '../Modal/Modal'
import ModalElement from '../ModalElement/ModalElement'
import styles from './CardContent.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { addCartItems } from '../../redux/reducers/CartReducer/ActionCreator'
import { useCart } from '../../hooks/useCart'

const CardContent = (cardContentProps) => {
  const {
    name,
    brand,
    currentPrice,
    quantity,
    imageUrls,
    categories,
    rating,
    _id,
  } = cardContentProps
  const [amount, setAmount] = useState(23)
  const [open, setOpen] = useState(false)
  const { itemsInCart } = useCart()
  // const { token } = useAuth()
  const dispatch = useDispatch()

  const { customerId, products } = itemsInCart
  const { cartQuantity, product } = products

  const blackBGButton = {
    width: '221px',
    height: '44px',
    color: 'white',
    backgroundColor: 'black',
  }

  const changeQuantFunc = (event) => {
    setAmount(event.target.value)
  }

  const addProduct = () => {
    dispatch(addCartItems(_id))
  }

  const handleClose = () => setOpen(false)

  const values = [3, 23, 12, 15, 16, 67]

  const dropDown = {
    labelFor: 'Choose quantity',
    value: amount,
    onChange: changeQuantFunc,
    values: values,
  }

  const modalProps = {
    open,
    setOpen,
    handleOpen: addProduct,
    handleClose,
  }

  return (
    <>
      <div className={styles.containerForImg}>
        <SecondCarousel items={imageUrls} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <Typography variant="h1" component="h2">
            {name}
          </Typography>
          <hr />
          <div className={styles.forWhom}>
            <Typography variant="h1" component="h2">
              {categories}
            </Typography>
            <Typography variant="h1" component="h2">
              quantity: {quantity}
            </Typography>
          </div>
        </div>
        <div className={styles.dropDownContainer}>
          <Typography variant="h1" component="h2">
            {currentPrice}₴
          </Typography>
          <DropDown {...dropDown} />
        </div>
        <div className={styles.buttonBlock}>
          <Button
            onClick={addProduct}
            buttonContent={blackBGButton}
            title="Add to Cart"
          />
          <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
        </div>
        <Typography variant="h1" component="h2">
          {brand}
        </Typography>
        <div className={styles.ratingContainer}>
          <Typography>Rating: </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <Modal {...modalProps}>
          <ModalElement
            handleClose={handleClose}
            cardContentProps={cardContentProps}
            // title="Cart"
          />
        </Modal>
      </div>
    </>
  )
}

CardContent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  cardContentProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

CardContent.defaultProps = {
  title: 'Cart',
}


export default CardContent
