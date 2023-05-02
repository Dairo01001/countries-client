import PropTypes from 'prop-types'
import Country from '../Country'

const Countries = ({ countries }) => {
  return (
    <div className='container mx-auto flex justify-center' style={{ minHeight: '60vh' }}>
      <div className='grid-container min-w-full'>
        {countries.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </div>
    </div>
  )
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape).isRequired
}

export default Countries
