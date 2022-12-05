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
    dispatch(getFoods({ menu }))
  }, [menu]);


  return (
    <div className="w-9/12 bg-[#FEFBF6]">
      <div className="flex justify-between items-center">
        <div className="px-10 py-10 text-2xl font-bold">Choose Category</div>
        <div className="px-10 py-10">
          <Search/>
        </div>
      </div>

      <div className="px-10 grid grid-cols-12 gap-2 ">
        {
          categories && categories.map((category, index) => {
            return (
              <Category key={index} category={category}/>
            )
          })
        }
      </div>

      <div className="px-10 py-10 text-2xl font-bold capitalize">{menu} Menu</div>

      <div className="px-10">
        <div className="grid grid-cols-3 gap-4">
          {
            meals && meals.map((meal, index) => {
              return (
                <FoodMenuCard key={index} meal={meal} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Food;
