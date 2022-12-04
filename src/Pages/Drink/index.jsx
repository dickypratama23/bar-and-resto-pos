import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkCategories } from '../../Features/drinksSlice.jsx'
import { useSearchParams } from 'react-router-dom'

import Search from '../../components/Search'
import Category from '../../components/Category/index.jsx'

const Food = () => {
  const [searchParams] = useSearchParams()
  const menu = searchParams.get('menu')

  const dispatch = useDispatch()
  const { categories } = useSelector((state) => ({...state.drinks}))

  useEffect(() => {
    dispatch(getDrinkCategories())
  }, []);

  useEffect(() => {
    // update menu
  }, [menu])

  return (
    <div className="w-9/12 bg-[#FEFBF6]">
      <div className="flex justify-between items-center">
        <div className="px-10 py-10 text-2xl font-bold">Choose Category</div>
        <div className="px-10 py-10">
          <Search />
        </div>
      </div>

      <div className="px-10 grid grid-flow-col auto-cols-max gap-2 ">
        {
          categories && categories.map((category, index) => {
            return (
              <Category key={index} category={category} />
            )
          })
        }
      </div>

      <div className="px-10 py-10 text-2xl font-bold capitalize">{ menu.replace('_', '') } Menu</div>
    </div>
  )
}

export default Food;
