import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Features/foodsSlice.jsx'
import { useSearchParams } from 'react-router-dom'

import Search from '../../components/Search'
import Category from '../../components/Category/index.jsx'

const Food = () => {
  const [searchParams] = useSearchParams()
  const menu = searchParams.get('menu')

  const dispatch = useDispatch()
  const { categories } = useSelector((state) => ({...state.foods}))

  useEffect(() => {
    dispatch(getCategories())
  }, []);

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

      <div className="px-10 py-10 text-2xl font-bold capitalize">{ menu } Menu</div>
    </div>
  )
}

export default Food;
