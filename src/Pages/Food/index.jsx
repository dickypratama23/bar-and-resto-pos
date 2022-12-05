import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getFoods } from '../../Features/foodsSlice.jsx'
import { useSearchParams } from 'react-router-dom'

import Search from '../../components/Search'
import Category from '../../components/Category/index.jsx'
import FoodMenuCard from '../../components/FoodMenuCard/index.jsx'

const Food = () => {
  const [searchParams] = useSearchParams()
  const menu = searchParams.get('menu')

  const dispatch = useDispatch()
  const {categories, meals} = useSelector((state) => ({...state.foods}))

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  useEffect(() => {
    dispatch(getFoods({menu}))
  }, [menu]);

  return (
    <div className="w-9/12 bg-[#FEFBF6] grid grid-flow-row auto-rows-max">
      <div className="flex justify-between items-center py-10 h-fit">
        <div className="px-10 text-2xl font-bold">Choose Category</div>
        <div className="px-10">
          <Search/>
        </div>
      </div>
      <div className="px-10 flex gap-2 h-fit scrollbar-hide overflow-x-auto">
        {
          categories && categories.map((category, index) => {
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
  )
}

export default Food;
