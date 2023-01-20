import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './reducers/favouritesReducer/wishlistReducer'
import cartReducer from './reducers/CartReducer/CartSlice'

const rootReducer = combineReducers({
  favouritesReducer,
  cartReducer,
})

export const launchStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
