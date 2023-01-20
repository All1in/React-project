import { useState } from 'react'

export const useLoadCards = () => {
  const [view, setView] = useState(false)
  const [cards, setCards] = useState([])
  const [sort, setSort] = useState('')
  const [startPage, setStartPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const handleChange = (event) => {
    setSort(event.target.value)
  }

  const changeOnSmaller = () => {
    setView(false)
  }

  const changeOnBigger = () => {
    setView(true)
  }

  return {
    view,
    setView,
    cards,
    setCards,
    sort,
    setSort,
    startPage,
    setStartPage,
    hasMore,
    setHasMore,
    handleChange,
    changeOnSmaller,
    changeOnBigger,
  }
}
