import { useDispatch, useSelector } from 'react-redux'
import { filterRegions } from '../../features/countries/countriesSlice'

export default function Filters () {
  const regions = useSelector((state) => state.countries.regions)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(filterRegions(value))
  }

  return (
    <select
      onChange={handleChange}
      id='countries'
      className='bg-gray-50 border w-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  )
}
