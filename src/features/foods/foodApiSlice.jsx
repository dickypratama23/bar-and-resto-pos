import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodApiSlice = createApi({
  reducerPath: 'apiFood',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1'
  }),
  endpoints: (build) => ({
    fetchFoodCategories: build.query({
      query: () => 'categories.php'
    }),
    searchFoods: build.query({
      query: (menu) => `filter.php?c=${menu}`
    })
  })
})

export const {useFetchFoodCategoriesQuery, useSearchFoodsQuery} = foodApiSlice
