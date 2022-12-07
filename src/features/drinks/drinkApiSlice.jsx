import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const drinkApiSlice = createApi({
  reducerPath: 'apiDrink',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'
  }),
  endpoints: (build) => ({
    fetchDrinkCategories: build.query({
      query: () => 'list.php?c=list'
    }),
    searchDrinks: build.query({
      query: (menu) => `filter.php?c=${menu}`
    })
  })
})

export const {useFetchDrinkCategoriesQuery, useSearchDrinksQuery} = drinkApiSlice
