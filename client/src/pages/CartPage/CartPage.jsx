import React from 'react'
// import Button from '../components/Button/Button'
import BasketBoard from '../../components/BasketPage/BasketBoard/BasketBoardLayout'

const CartPage = () => {
  const mainButton = {
    width: '150px',
    height: '44px',
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '-3px 3px 4px #00FF38',
    fontSize: '22px',
  }

  const blackBGButton = {
    width: '221px',
    height: '44px',
    color: 'white',
    backgroundColor: 'black',
  }

  const greyBGButton = {
    width: '435px',
    height: '60px',
    color: 'white',
    backgroundColor: '#B7B7B7',
    fontSize: '20px',
  }

  return (
    <div className="text-center text-bg-light">
      {/*<Button buttonContent={mainButton} title="КУПИТь" />*/}
      <BasketBoard />
      {/*<Button buttonContent={blackBGButton} title="ДОБАВИТЬ В КОРЗИНУ" />*/}
      {/*<Button buttonContent={greyBGButton} title="ВЕРНУТЬСЯ В КОРЗИНУ" />*/}
    </div>
  )
}

export default CartPage
