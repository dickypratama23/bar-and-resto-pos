import {useFetchFoodCategoriesQuery, useSearchFoodsQuery} from "../../features/foods/foodApiSlice.jsx";
import {useSearchParams} from 'react-router-dom'

import Search from '../../components/Search'
import Category from '../../components/Category/index.jsx'
import FoodMenuCard from '../../components/FoodMenuCard/index.jsx'
import Bill from '../../components/Bill/index.jsx'

const Food = () => {
  const [searchParams] = useSearchParams()
  const menu = searchParams.get('menu')

  const { data: categories } = useFetchFoodCategoriesQuery()
  const { data: meals } = useSearchFoodsQuery(menu)

  return (
    <>
      <div className="w-9/12 bg-[#FEFBF6] grid grid-flow-row auto-rows-max">
        <div className="flex justify-between items-center py-10 h-fit">
          <div className="px-10 text-2xl font-bold">Choose Category</div>
          <div className="px-10">
            <Search/>
          </div>
        </div>
        <div className="px-10 flex gap-2 h-fit scrollbar-hide overflow-x-auto">
          {
            categories?.categories.map((category, index) => {
              return (
                <Category key={index} category={category}/>
              )
            })
          }
        </div>
        <div className="px-10 py-5 text-2xl font-bold capitalize h-fit">{menu} Menu</div>
        <div className="px-10 scrollbar-hide overflow-y-auto h-[690px]">
          <div className="grid grid-cols-3 gap-4">
            {
              meals && meals.map((meal, index) => {
                return (
                  <FoodMenuCard key={index} meal={meal}/>
                )
              })
            }
          </div>
        </div>
      </div>
      <Bill/>
    </>
  )
}

export default Food;
