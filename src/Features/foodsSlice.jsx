import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FoodApiInstance } from '../Apis/ApiInstance.jsx'

const initialStateFoods = {
  loading: false,
  error: null,
  categories: [],
  foods: [],
  search: []
}

export const getCategories = createAsyncThunk('getCategories', async () => {
  const response = await FoodApiInstance.get('/categories.php')
  return response.data
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
  }
})

export default foodsSlice.reducer;
