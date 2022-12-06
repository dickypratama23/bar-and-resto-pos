import { AddPersonIcon, OrderIcon, ProductIcon, SalesIcon } from '../components/Icon/index.jsx'

const data = [
  {
    'icon': <SalesIcon />,
    'title': 'Total Sales',
    'amount': 1000,
    'growth': 8,
    'color1': 'bg-pink-200',
    'color2': 'bg-pink-700'
  },
  {
    'icon': <OrderIcon />,
    'title': 'Total Order',
    'amount': 400,
    'growth': 18,
    'color1': 'bg-orange-200',
    'color2': 'bg-orange-700'
  },
  {
    'icon': <ProductIcon />,
    'title': 'Product Sold',
    'amount': 1200,
    'growth': 28,
    'color1': 'bg-green-200',
    'color2': 'bg-green-700'
  },
  {
    'icon': <AddPersonIcon />,
    'title': 'New Customers',
    'amount': 100,
    'growth': 23,
    'color1': 'bg-purple-200',
    'color2': 'bg-purple-700'
  },
]

export default data
