import axios from 'axios'

export const FoodApiInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
})

export const DrinkApiInstance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
})
