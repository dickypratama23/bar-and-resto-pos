import {useCallback, useEffect, useState} from "react";
import {
  useFetchDrinkCategoriesQuery,
  useFilterDrinksQuery,
  useSearchDrinksQuery
} from '../../features/drinks/drinkApiSlice.jsx'
import {useSearchParams} from 'react-router-dom'

import Search from '../../components/Search'
import Category from '../../components/Category/index.jsx'
import DrinkMenuCard from '../../components/DrinkMenuCard/index.jsx'
import Bill from '../../components/Bill/index.jsx'
import Loading from "../../components/Loading/index.jsx";

const Drink = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams()
  const menu = searchParams.get('menu')
  const s = searchParams.get('s')

  const {data: categories, isLoading} = useFetchDrinkCategoriesQuery()
  const {data: filters} = useFilterDrinksQuery(menu)
  const {data: searches} = useSearchDrinksQuery(s)

  useEffect(() => {
    if (menu) {
      setLoading(true)
      setStatus(false)
    }
  }, [menu]);

  useEffect(() => {
    setLoading(false)
  }, [filters]);

  useEffect(() => {
    if (s) {
      setLoading(true)
      setStatus(true)
    }
  }, [s]);

  useEffect(() => {
    setLoading(false)
  }, [searches]);

  const handleSearch = useCallback((e) => {
    if (e.key === 'Enter') {
      setLoading(true)
      setSearchParams(`s=${e.target.value}`)
      e.target.value = ''
    }
  }, []);

  const ShowByCategories = () => (<>
    {loading ? <Loading/> : (<div className="grid grid-cols-3 gap-4">
      {filters?.drinks?.map((drink, index) => {
        return (<DrinkMenuCard key={index} drink={drink}/>)
      })}
    </div>)}
  </>)

  const ShowBySearch = () => (<>
    {loading ? <Loading/> : (<div className="grid grid-cols-3 gap-4">
      {searches?.drinks?.map((drink, index) => {
        return (<DrinkMenuCard key={index} drink={drink}/>)
      })}
    </div>)}
  </>)

  return (
    <>
      {
        isLoading ? <Loading/> : (
          <>
            <div className="w-9/12 bg-[#FEFBF6] grid grid-flow-row auto-rows-max">
              <div className="flex justify-between items-center py-10 h-fit">
                <div className="px-10 text-2xl font-bold">Choose Category</div>
                <div className="px-10">
                  <Search onKeyDown={handleSearch}/>
                </div>
              </div>
              <div className="px-10 flex gap-2 h-fit scrollbar-hide overflow-x-auto">
                {
                  categories && categories.drinks.map((category, index) => {
                    return (
                      <Category key={index} category={category}/>
                    )
                  })
                }
              </div>
              <div
                className="px-10 py-5 text-2xl font-bold capitalize h-fit">{menu ? menu.replaceAll('_', ' ') : 'Result Search'} Menu
              </div>
              <div className="px-10 scrollbar-hide overflow-y-auto h-[690px]">
                {status ? <ShowBySearch/> : <ShowByCategories/>}
              </div>
            </div>
            <Bill/>
          </>
        )
      }
    </>
  )
}

export default Drink;
