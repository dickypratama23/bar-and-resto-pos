import FireIcon from '../Icon/FireIcon.jsx'
import ColdIcon from '../Icon/ColdIcon'

const FoodMenuCard = ({drink}) => {
  const {strDrink, strDrinkThumb, idDrink} = drink

  return (
    <div
      className="flex flex-col bg-[#FFF8EA] rounded-xl h-fit"
    >
      <div className="grid-body flex">
        <div className="thumb px-5 py-5">
          <img className="rounded-xl w-[200px] h-[130px]" src={strDrinkThumb} alt=""/>
        </div>
        <div className="info flex flex-col justify-between py-5 pr-5">
          <div className="title text-md font-semibold capitalize">{strDrink}</div>
          <div className="description text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="price text-1xl font-bold">
            <span className="currency text-xs mr-1 align-text-top">$</span>
            {Math.floor(Math.random() * (1000 - 100) + 100) / 100}
          </div>
        </div>
      </div>
      <div className="mood-size flex justify-between px-5 pb-5">
        <div className="mood">
          <div className="font-bold mb-3">Mood</div>
          <div className="flex gap-1">
            <div className="bg-[#FEFBF6] p-2 rounded-full border-2 border-[#EDDBC0]"><FireIcon/></div>
            <div className="bg-[#FEFBF6] p-2 rounded-full border-2 border-[#EDDBC0]"><ColdIcon/></div>
          </div>
        </div>
        <div className="size">
          <div className="font-bold mb-3">Size</div>
          <div className="flex gap-1">
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[14px] font-semibold flex justify-center items-center">S</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[14px] font-semibold flex justify-center items-center">M</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[14px] font-semibold flex justify-center items-center">L</div>
          </div>
        </div>
      </div>
      <div className="sugar-ice flex justify-between px-5 pb-5">
        <div className="mood">
          <div className="font-bold mb-3">Sugar</div>
          <div className="flex gap-1">
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">30%</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">50%</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">70%</div>
          </div>
        </div>
        <div className="size">
          <div className="font-bold mb-3">Ice</div>
          <div className="flex gap-1">
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">30%</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">50%</div>
            <div className="bg-[#FEFBF6] w-[34px] h-[34px] rounded-full border-2 border-[#EDDBC0] text-[10px] font-semibold flex justify-center items-center">70%</div>
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
