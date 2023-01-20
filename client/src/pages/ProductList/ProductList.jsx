import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import Options from '../../components/Options/Options'
import { useLoading } from '../../hooks/useLoading'
import ProductService from '../../API/ProductService'
import DropDown from '../../components/DropDown/DropDown'
import styles from './ProductList.module.scss'
import { useLoadCards } from '../../hooks/useLoadCards'

const ProductList = () => {
  const {
    view,
    cards,
    setCards,
    sort,
    startPage,
    setStartPage,
    hasMore,
    setHasMore,
    handleChange,
    changeOnSmaller,
    changeOnBigger,
  } = useLoadCards()

  const [getCards, isCardsLoading, cardsError] = useLoading(async () => {
    const { products, productsQuantity } =
      await ProductService.getProductsBySomeParams(5, startPage, sort, cards) // to setCards(cards = [])
    setCards([...cards, ...products])
    console.log('productsQuantity: ', productsQuantity)
    setStartPage(startPage + 1)
    if (!products.length) setHasMore(false)
  })

  useEffect(() => {
    getCards()
  }, [sort])

  const props = {
    sizeFirst: 2,
    sizeSecond: 4,
    changeOnSmaller,
    changeOnBigger,
    product: 'men',
  }
  const cardListProps = {
    cards: cards,
    cardsLoading: isCardsLoading,
    cardsError: cardsError,
    getCards: getCards,
    view: view,
    hasMore: hasMore,
  }
  const values = ['name', 'currentPrice', 'quantity']
  const dropDownProps = {
    labelFor: 'Sort By',
    value: sort,
    onChange: handleChange,
    values: values,
  }

  return (
    <div className={styles.containerList}>
      <CardList {...cardListProps} />
      <Options {...props} />
      <DropDown {...dropDownProps} />
    </div>
  )
}

export default ProductList
