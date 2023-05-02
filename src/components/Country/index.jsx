import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Country = ({ country }) => {
  const { id, name, flag, region } = country

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link to={`/country/${id}`}>
        <img className='rounded-t-lg' src={flag} alt={name} />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {region}
          </p>
        </div>
      </Link>
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.objectOf(PropTypes.shape).isRequired
}

export default Country
