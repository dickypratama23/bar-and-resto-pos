import { Link } from 'react-router-dom'

const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category

  return (
    <Link
      className="py-4 px-4 flex flex-col justify-center text-[#242424] hover:text-slate-700 items-center rounded-xl bg-[#EDDBC0] hover:bg-[#FFF8EA] cursor-pointer"
      to={`?menu=${strCategory.toLowerCase()}`}
    >
      <div className="thumbnail">
        <img src={strCategoryThumb} alt={`alt-${strCategory}`} className="w-[48px] h-[28px]" />
      </div>
      <div className="label mt-2 text-sm font-bold">
        { strCategory }
      </div>
    </Link>
  )
}

export default Category
