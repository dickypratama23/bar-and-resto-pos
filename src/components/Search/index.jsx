const Search = () => {
  return (
    <label className="relative block">
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="w-5 h-5 text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search menu..." type="text" name="search" autoComplete={'off'}/>
    </label>
  )
}

export default Search
