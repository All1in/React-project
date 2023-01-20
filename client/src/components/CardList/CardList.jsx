import React from 'react'
import ActualCard from '../ActualCard/ActualCard'
import Preloader from '../Preloader/Preloader'
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Message from '../UI/Message/Message'
import DropDown from '../DropDown/DropDown'
import styles from './CardList.module.scss'

// const sizes = [38, 39, 40, 41, 42]

const CardList = (cardListProps) => {
  const { view, cards, cardsLoading, cardsError, hasMore, getCards } =
    cardListProps
  const names = cards.map((card) => {
    return card.name
  })

  const quantities = cards.map((card) => {
    return card.quantity
  })

  const prices = cards.map((card) => {
    return card.currentPrice
  })

  // if (!cards.length) return <Headline />
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardList}>
        <h1 className={styles.headline}> Shoes </h1>
        <DropDown labelFor="Choose Brand" values={names} />
        <DropDown labelFor="Choose Quantity" values={quantities} />
        <DropDown labelFor="Choose Price" values={prices} />
      </div>
      <div className={styles.containerCards}>
        <InfiniteScroll
          next={getCards}
          hasMore={hasMore}
          loader={<Preloader />}
          dataLength={cards.length}
          endMessage={<Message text="You have seen all cards for now" />}
        >
          {cardsLoading && <Preloader />}
          {cardsError && <ErrorComponent error={cardsError} />}
          {cards.map((card) => {
            const {
              quantity,
              enabled,
              brand,
              name,
              currentPrice,
              previousPrice,
              categories,
              imageUrls,
              itemNo,
            } = card
            const props = {
              view,
              brand,
              name,
              currentPrice,
              categories,
              imageUrls,
              quantity,
              enabled,
              card,
              previousPrice,
              itemNo,
            }
            return <ActualCard key={itemNo} {...props} />
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

CardList.propTypes = {
  view: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
  cardsLoading: PropTypes.bool.isRequired,
  cardsError: PropTypes.string.isRequired,
  getCards: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
}

CardList.defaultProps = {
  view: false,
  cards: [],
  cardsLoading: false,
  cardsError: '',
}

export default CardList
