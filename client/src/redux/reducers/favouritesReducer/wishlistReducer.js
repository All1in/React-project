import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInWishlist: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: {},
})

export const {} = wishlistSlice.actions
export default wishlistSlice.reducer
