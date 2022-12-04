import {configureStore} from '@reduxjs/toolkit'
import FoodsSlice from '../Features/foodsSlice.jsx'
import DrinksSlice from '../Features/drinksSlice.jsx'

export default configureStore({
  reducer: {
    foods: FoodsSlice,
    drinks: DrinksSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
