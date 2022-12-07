import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FoodApiInstance } from '../apis/ApiInstance.jsx'

const initialStateFoods = {
  loading: false,
  error: null,
  categories: [],
  meals: [],
  search: []
}

export const getCategories = createAsyncThunk('getCategories', async () => {
  const response = await FoodApiInstance.get('/categories.php')
  return response.data.categories
})

export const getFoods = createAsyncThunk('getFoods', async ({menu}) => {
  const response = await FoodApiInstance.get(`/filter.php?c=${menu}`)
  return response.data.meals
})

const foodsSlice = createSlice({
  name: 'foods',
  initialState: initialStateFoods,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getFoods.pending, (state) => {
        state.loading = true
      })
      .addCase(getFoods.fulfilled, (state, action) => {
        state.loading = false
        state.meals = action.payload
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default foodsSlice.reducer;
