import reducer, {
  setItemInFavourites,
  deleteItemsFromFavourites,
} from './wishlistReducer'

describe('FavSlice', () => {
  const itemsInFavourites = []
  const deleteItemsFromFav = [7, 5, 8]

  test('adding items in favourites', () => {
    const action = {
      type: setItemInFavourites().type,
      payload: itemsInFavourites.push(5, 7, 9),
    }
    const state = reducer(itemsInFavourites, action)
    expect(state).toEqual([5, 7, 9])
  })

  test('delete items favourites', () => {
    const action = {
      type: deleteItemsFromFavourites().type,
      payload: deleteItemsFromFav.pop(),
    }
    const state = reducer(deleteItemsFromFav, action)
    expect(state).toEqual([7, 5])
  })
})
