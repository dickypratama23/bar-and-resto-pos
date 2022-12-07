import {configureStore} from '@reduxjs/toolkit'
import {drinkApiSlice} from '../features/drinks/drinkApiSlice.jsx'
import {foodApiSlice} from "../features/foods/foodApiSlice.jsx";

export default configureStore({
  reducer: {
    [foodApiSlice.reducerPath]: foodApiSlice.reducer,
    [drinkApiSlice.reducerPath]: drinkApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat([
    foodApiSlice.middleware,
    drinkApiSlice.middleware
  ])
})
