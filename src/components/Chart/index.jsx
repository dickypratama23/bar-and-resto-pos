import HighchartsReact from 'highcharts-react-official'
import * as Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsAccessibility from 'highcharts/modules/accessibility'
import HighchartsMore from  'highcharts/highcharts-more'

HighchartsExporting(Highcharts)
HighchartsAccessibility(Highcharts)
HighchartsMore(Highcharts)

const Chart = ({ title, options }) => {
  return (
    <div className="flex flex-col w-5/12 font-bold px-5 pt-5 rounded-md bg-[#FFF8EA]">
      {title}
      <div className="my-5">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  )
}

export default Chart
