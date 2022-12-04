import { Link, useSearchParams } from 'react-router-dom'

const Category = ({category}) => {
  const [searchParams] = useSearchParams()
  const menu = searchParams.get('menu')

  const {strCategory, strCategoryThumb} = category

  return (
    <Link
      className={`py-4 px-4 flex flex-col justify-center text-[#242424] hover:text-slate-700 border-2  items-center rounded-xl cursor-pointer ${menu === strCategory.replaceAll(' ', '_') ? 'border-[#EDDBC0]' : 'border-[#FFF8EA] bg-[#FFF8EA] hover:bg-[#EDDBC0]'}`}
      to={`?menu=${strCategory.replaceAll(' ', '_')}`}
    >
      {
        strCategoryThumb ? (
          <div className="thumbnail mb-2">
            <img src={strCategoryThumb} alt={`alt-${strCategory}`} className="w-[48px] h-[28px]"/>
          </div>
        ) : ''
      }

      <div className="label text-sm font-bold">
        {strCategory}
      </div>
    </Link>
  )
}

export default Category
