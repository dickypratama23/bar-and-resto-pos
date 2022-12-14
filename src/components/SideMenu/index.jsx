import logo from '../../assets/logo.png'
import Menus from '../Menus/index.jsx'
import { CloseIcon } from '../Icon/index.jsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SideMenu = () => {
  let navigate = useNavigate()
  const {pathname} = useLocation();

  return (
    <div className="flex flex-col w-24 items-center bg-[#FFF8EA]">
      <div className="logo mt-5 mb-10">
        <img src={logo} width={65} alt="fireSpot"/>
      </div>

      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-1 menu">
          {
            Menus.map((menu, index) => {
              return (
                <Link
                  key={index}
                  className={`flex flex-col items-center text-[#242424] hover:text-slate-700 p-2 font-bold ${pathname === menu.url.split('?')[0] ? 'bg-[#EDDBC0]' : 'hover:bg-[#EDDBC0]'} rounded-xl cursor-pointer`}
                  to={menu.url}
                >
                  <div className="icon">
                    {menu.icon}
                  </div>
                  <div className="label text-sm mt-1">
                    {menu.name}
                  </div>
                </Link>
              )
            })
          }
        </div>

        <div
          className="flex flex-col items-center p-2 font-bold hover:bg-[#EDDBC0] rounded-xl cursor-pointer">
          <div className="icon">
            <CloseIcon/>
          </div>
          <div className="label text-sm mt-1">
            Sign Out
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideMenu
