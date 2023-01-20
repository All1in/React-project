import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import CardSmaller from '../CardSmaller/CardSmaller'
import CardBigger from '../CardBigger/CardBigger'
import { useLoading } from '../../hooks/useLoading'
import ProductService from '../../API/ProductService'
import styles from './ActualCard.module.scss'

const ActualCard = (props) => {
  const navigate = useNavigate()
  const [actualCard, setActualCard] = useState({})
  const [getCard, isCardLoading, cardError] = useLoading(async (itemNo) => {
    const response = await ProductService.getProductsById(itemNo)
    setActualCard(response.data)
  })
  const { view, itemNo, previousPrice } = props

  const redirectToCard = () => {
    navigate(`/list/${itemNo}`)
  }

  return (
    <div className={styles.cards}>
      {view ? (
        <CardBigger {...props} redirectToCard={redirectToCard} />
      ) : (
        <CardSmaller {...props} redirectToCard={redirectToCard} />
      )}
    </div>
  )
}

ActualCard.propTypes = {
  view: PropTypes.bool.isRequired,
  itemNo: PropTypes.string.isRequired,
}

ActualCard.defaultProps = {
  view: false,
  itemNo: '',
}

export default ActualCard
