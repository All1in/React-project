import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../../hooks/useLoading'
import ProductService from '../../API/ProductService'
import Preloader from '../../components/Preloader/Preloader'
import CardContent from '../../components/CardContent/CardContent'
import styles from './CardIdPage.module.scss'

const CardIdPage = () => {
  const params = useParams()
  const cardState = {
    _id: '6372921b1c8d1e749b38f701',
    enabled: true,
    name: 'Nike Air Max 200',
    currentPrice: 5400,
    categories: 'for women',
    imageUrls: [
      'https://allstars.ua/upload/iblock/f89/f898d69685082cdec069025ade6df219.jpg',
      'https://sport-mood.com/image/catalog/A/AT6175-104/AT6175-104_1.jpg',
      'https://images.prom.ua/2356664878_w500_h500_krossovki-muzhskie-nike.jpg',
      'https://intersport.ua/node-static/storage/products/basic/001/939/93_1.jpg',
    ],
    quantity: 10,
    productUrl: '/women',
    brand: 'Nike',
    itemNo: '123122',
    rating: 2,
  }
  const [card, setCard] = useState(cardState)
  const [amount, setAmount] = useState(23)
  const [getCard, isCardLoading, cardError] = useLoading(async (itemNo) => {
    const response = await ProductService.getProductsById(itemNo)
    setCard(response.data)
  })

  const changeQuantFunc = (event) => {
    setAmount(event.target.value)
  }

  const {
    name,
    brand,
    currentPrice,
    previousPrice,
    quantity,
    imageUrls,
    categories,
    rating,
    _id,
  } = card

  useEffect(() => {
    getCard(params.itemNo)
  }, [])

  const cardContentProps = {
    name,
    brand,
    currentPrice,
    quantity,
    imageUrls,
    categories,
    rating,
    _id,
  }

  return (
    <div className={styles.containerPage}>
      {isCardLoading && <Preloader />}
      <CardContent {...cardContentProps} />
    </div>
  )
}

export default CardIdPage
