import user from '../../assets/woman.jpg'

const Bill = () => {
  return (
    <div className="w-3/12 bg-[#FFF8EA]">
      <div className="flex flex-col h-screen">
        <div className="flex px-10 py-5 justify-between">
        <div className="flex">
          <img className="rounded-md" src={user} alt={'user-logo'} width={80}/>
          <div className="flex flex-col items-center justify-center ml-4">
            <span className="text-sm text-gray-500">i'm Cashier</span>
            <span className="font-bold">John Doe</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
        </div>
      </div>

      <div className="flex flex-col h-screen justify-between px-10 mt-6 mb-7">
        <span className="text-xl font-bold">Bills</span>
        <div className="payment-method">
          <div className="text-xl font-bold">Payment Methods</div>
          <div className="grid grid-cols-3 gap-4 w-full mt-8">
            <div
              className="p-5 flex flex-col rounded-xl justify-center items-center bg-[#FEFBF6] cursor-pointer border-2 border-[#FEFBF6] hover:border-[#EDDBC0] hover:text-purple-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"/>
              </svg>
              <span className="text-xs font-bold mt-1">Cash</span>
            </div>
            <div
              className="p-5 flex flex-col rounded-xl justify-center items-center bg-[#FEFBF6] cursor-pointer border-2 border-[#FEFBF6] hover:border-[#EDDBC0] hover:text-purple-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
              </svg>
              <span className="text-xs font-bold mt-1">Debit Card</span>
            </div>
            <div
              className="p-5 flex flex-col rounded-xl justify-center items-center bg-[#FEFBF6] cursor-pointer border-2 border-[#FEFBF6] hover:border-[#EDDBC0] hover:text-purple-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"/>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"/>
              </svg>
              <span className="text-xs font-bold mt-1">E-Wallet</span>
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-[#EDDBC0] hover:border-[#EDDBC0] border-2 hover:border-2 hover:bg-[#FEFBF6] py-4 rounded-md text-[#242424] font-bold w-full"
                    type="submit">
              Print Bills
            </button>
          </div>
        </div>
      </div>
      </div>

    </div>)
}

export default Bill
