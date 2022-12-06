const Card = ({data}) => {
  return (
    <div className={`flex flex-col ${data.color1} p-3 rounded-xl`}>
      <div className="flex gap-3 items-center">
        <div className={`icon p-2 rounded-full ${data.color2} text-white text-[12px]`}>
          {data.icon}
        </div>
        <div className="text-md">{data.title}</div>
      </div>
      <div className="mt-3">
        <div className="value text-xl">{data.amount}</div>
        <div className="growth text-[12px] text-blue-500">{data.growth}% from yesterday</div>
      </div>
    </div>
  )
}

export default Card
