import { createSlice } from '@reduxjs/toolkit'
import { cartItems } from './ActionCreator'

const initialState = {
  itemsInCart: {
    _id: '',
    customerId: {},
    products: [],
  },
  isCartLoading: false,
  cartError: '',
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToTheCart(state, action) {
      state.itemsInCart.products.push(action.payload)
    },
    decreaseQuantityOfProducts(state) {
      state.itemsInCart.products.pop()
    },
    removeProduct(state, action) {
      state.itemsInCart = state.itemsInCart.products.filter(
        (product) => product._id !== action.payload._id
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartItems.fulfilled, (state, action) => {
        state.isCartLoading = false
        state.cartError = ''
        state.itemsInCart = action.payload
      })
      .addCase(cartItems.pending, (state) => {
        state.isCartLoading = true
      })
      .addCase(cartItems.rejected, (state, action) => {
        state.isCartLoading = false
        state.cartError = action.payload
      })
  },
})

export const {
  addProductToTheCart,
  removeProduct,
  decreaseQuantityOfProducts,
} = CartSlice.actions
export default CartSlice.reducer
