import reducer from './CartSlice'
import { cartItems } from './ActionCreator'

describe('CarTSliceTest', () => {
  describe('extraReducers', () => {
    const initialState = {
      itemsInCart: {
        _id: '',
        customerId: {},
        products: [],
      },
      isCartLoading: false,
      cartError: '',
    }

    test('cartItems is pending', () => {
      const action = { type: cartItems.pending.type }
      const state = reducer(initialState, action)
      expect(state).toEqual({
        itemsInCart: {
          _id: '',
          customerId: {},
          products: [],
        },
        isCartLoading: true,
        cartError: '',
      })
    })

    test('cartItems is fulfilled', () => {
      const action = {
        type: cartItems.fulfilled.type,
        payload: {
          _id: '',
          customerId: {},
          products: [2, 4],
        },
      }
      const state = reducer(initialState, action)
      expect(state).toEqual({
        itemsInCart: action.payload,
        isCartLoading: false,
        cardsError: '',
      })
    })

    test('cartItems is rejected', () => {
      const action = {
        type: cartItems.rejected.type,
        payload: { cartError: 'Cannot upload cards' },
      }
      const state = reducer(initialState, action)
      expect(state).toEqual({
        itemsInCart: {
          _id: '',
          customerId: {},
          products: [],
        },
        isCartLoading: false,
        cartError: action.payload,
      })
    })
  })
})
