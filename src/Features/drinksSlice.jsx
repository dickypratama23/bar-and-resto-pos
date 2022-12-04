import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DrinkApiInstance } from '../Apis/ApiInstance.jsx'

const initialStateDrinks = {
  loading: false,
  error: null,
  categories: [],
  drinks: [],
  search: []
}

export const getDrinkCategories = createAsyncThunk('getDrinkCategories', async () => {
  const response = await DrinkApiInstance.get('/list.php?c=list')
  return response.data.drinks
})

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: initialStateDrinks,
  extraReducers: (builder) => {
    builder
      .addCase(getDrinkCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(getDrinkCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
      })
      .addCase(getDrinkCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default drinksSlice.reducer;