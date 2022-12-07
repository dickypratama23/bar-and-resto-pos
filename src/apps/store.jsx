import { configureStore } from '@reduxjs/toolkit'
import { drinkApiSlice } from '../features/drinks/drinkApiSlice.jsx'

import FoodsSlice from '../features/foodsSlice.jsx'

export default configureStore({
  reducer: {
    foods: FoodsSlice,
    [drinkApiSlice.reducerPath]: drinkApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({serializableCheck: false}).concat(drinkApiSlice.middleware)
  }
})
