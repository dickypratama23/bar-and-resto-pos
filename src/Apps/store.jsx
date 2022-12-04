import {configureStore} from '@reduxjs/toolkit'
import FoodsSlice from '../Features/foodsSlice.jsx'

export default configureStore({
  reducer: {
    foods: FoodsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
