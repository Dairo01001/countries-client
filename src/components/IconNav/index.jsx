import { Link } from 'react-router-dom'
import img from '../../assets/countries.png'

export default function IconNav () {
  return (
    <Link to='/' className='flex items-center'>
      <img
        src={img}
        className='h-8 mr-3 dark:bg-white rounded-3xl'
        alt='Flowbite Logo'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        Countries
      </span>
    </Link>
  )
}
