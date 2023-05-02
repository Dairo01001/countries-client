import { Link } from 'react-router-dom'
import countries from '../../assets/countries.png'

export default function Landing () {
  return (
    <div className='container mx-auto bg-white dark:bg-gray-900 p-4'>
      <div style={{ marginTop: '10%' }}>
        <div className='flex gap-11 w-full'>
          <div className='flex justify-center flex-col'>
            <p className='text-lg dark:text-white w-3/4 text-center'>
              Welcome to our country application. Here, you will be able to
              explore the world through its flags and discover the cultural
              activities that can be done in each of them, all year round!
            </p>
          </div>
          <div className='w-full'>
            <Link to='/countries'>
              <img className='countries-link' src={countries} alt='Imagen de los paises en texto' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
