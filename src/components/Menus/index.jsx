import { HomeIcon, FoodIcon, DrinkIcon, HistoryIcon, WalletIcon, PromoIcon, SettingIcon } from '../Icon/index.jsx'

const Menus = [
  {
    'name': 'Home',
    'icon': <HomeIcon/>,
    'url': '/'
  },
  {
    'name': 'Food',
    'icon': <FoodIcon/>,
    'url': '/food?menu=Beef'
  },
  {
    'name': 'Drink',
    'icon': <DrinkIcon/>,
    'url': '/drink?menu=Ordinary_Drink'
  },
  {
    'name': 'History',
    'icon': <HistoryIcon/>,
    'url': '/history'
  },
  {
    'name': 'Wallet',
    'icon': <WalletIcon/>,
    'url': '/wallet'
  },
  {
    'name': 'Promo',
    'icon': <PromoIcon/>,
    'url': '/promo'
  },
  {
    'name': 'Setting',
    'icon': <SettingIcon/>,
    'url': '/setting'
  }
]

export default Menus
