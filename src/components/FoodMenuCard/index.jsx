const FoodMenuCard = ({meal}) => {
  const {strMeal, strMealThumb, idMeal} = meal

  return (
    <div
      className="flex flex-col bg-[#FFF8EA] rounded-xl h-fit"
    >
      <div className="grid-body flex">
        <div className="thumb px-5 py-5">
          <img className="rounded-xl w-[200px] h-[130px]" src={strMealThumb} alt=""/>
        </div>
        <div className="info flex flex-col justify-between py-5 pr-5">
          <div className="title text-md font-semibold capitalize">{strMeal}</div>
          <div className="description text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="price text-1xl font-bold">
            <span className="currency text-xs mr-1 align-text-top">$</span>
            {Math.floor(Math.random() * (1000 - 100) + 100) / 100}
          </div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <button
          className="bg-[#EDDBC0] hover:border-[#EDDBC0] border-2 hover:border-2 hover:bg-[#FEFBF6] py-2 rounded-md text-[#242424] font-bold w-full"
          type="submit">
          Add to Billing
        </button>
      </div>
    </div>
  )
}

export default FoodMenuCard
