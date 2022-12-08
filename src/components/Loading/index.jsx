import {HomeIcon} from "../Icon/index.jsx";

const Loading = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-25 flex flex-col items-center justify-center"
    >
      {/*<div className="loader animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>*/}
      <svg className="animate-spin h-16 w-16 fill-amber-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"/>
      </svg>

      <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
    </div>
  )
}

export default Loading
