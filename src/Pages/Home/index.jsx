import Card from '../../components/Card/index.jsx'
import cards from '../../utils/card-datas.jsx'
import { visitors, revenue, satisfaction, target_reality, sales_growth, sales_growth_polar } from '../../utils/chart-data.jsx'
import Chart from '../../components/Chart/index.jsx'

const Home = () => {
  return (
    <div className="w-full bg-[#FEFBF6]">
      <div className="px-10 py-5 text-2xl font-bold">Home Menu</div>
      <div className="px-10">
        <div className="flex gap-4 mb-4">
          <div className="summary flex flex-col w-7/12 font-bold p-5 rounded-md bg-[#FFF8EA] h-sfit">
            Today's Sales
            <span className="text-xs my-1 text-gray-500">Sales Summary</span>
            <div className="grid grid-cols-4 gap-4 my-5">
              {
                cards.map((data, index) => (
                  <Card key={index} data={data}/>
                ))
              }
            </div>
          </div>

          <Chart title={"Visitor Insight"} options={visitors} />
        </div>

        <div className="flex gap-4">
          <Chart title={"Total Revenue"} options={revenue} />
          <Chart title={"Customer Satisfaction"} options={satisfaction} />
          <Chart title={"Target vs Reality"} options={target_reality} />
        </div>

        <div className="flex gap-4 mt-4">
          <Chart title={"Customer Satisfaction"} options={sales_growth} />
          <Chart title={"Customer Satisfaction"} options={sales_growth_polar} />
          <Chart title={"Customer Satisfaction"} options={sales_growth_polar} />
        </div>

      </div>
    </div>
  )
}

export default Home;
