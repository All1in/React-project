import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addProductToTheCart,
  decreaseQuantityOfProducts,
  removeProduct,
} from './CartSlice'

export const cartItems = createAsyncThunk(
  'cart/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/cart', {
        headers: {
          Authorization: `${
            JSON.parse(localStorage.getItem(`InfoAboutUser`)).token
          }`,
        },
      })
      return response.data
    } catch (e) {
      return rejectWithValue('Cannot upload Items In Cart')
    }
  }
)

export const deleteCartItems = createAsyncThunk(
  'cart/deleteCartItems',
  async (_id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/api/cart/${_id}`, {
        headers: {
          Authorization: `${
            JSON.parse(localStorage.getItem(`InfoAboutUser`)).token
          }`,
        },
      })
      dispatch(removeProduct(_id))
      return response.data
    } catch (e) {
      return rejectWithValue('Cannot delete this item from Cart')
    }
  }
)

export const addCartItems = createAsyncThunk(
  'cart/addCartItems',
  async (_id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.put(
        `/api/cart/${_id}`,
        {},
        {
          headers: {
            Authorization: `${
              JSON.parse(localStorage.getItem(`InfoAboutUser`)).token
            }`,
          },
        }
      )
      dispatch(addProductToTheCart(_id))
      return response.data
    } catch (e) {
      return rejectWithValue('Cannot add this item to Cart')
    }
  }
)

export const decreaseQuantity = createAsyncThunk(
  'cart/decreaseQuantity',
  async (_id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/api/cart/product/${_id}`, {
        headers: {
          Authorization: `${
            JSON.parse(localStorage.getItem(`InfoAboutUser`)).token
          }`,
        },
      })
      dispatch(decreaseQuantityOfProducts())
      return response.data
    } catch (e) {
      return rejectWithValue('Cannot decrease quantity')
    }
  }
)
