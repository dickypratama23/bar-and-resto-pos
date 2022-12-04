import Search from '../../components/Search/index.jsx'

const Food = () => {
  return (
    <div className="w-9/12 bg-[#FEFBF6]">
      <div className="flex justify-between">
        <div className="px-10 py-10 text-2xl font-bold">Choose Category</div>
        <div className="px-10 py-10">
          <Search />
        </div>
      </div>

      <div className="px-10 py-5 text-2xl font-bold">Food Menu</div>
    </div>
  )
}

export default Food;
