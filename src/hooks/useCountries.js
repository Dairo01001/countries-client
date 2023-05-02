import { useEffect } from 'react'
import { getCountries } from '../services/countries'
import { useDispatch, useSelector } from 'react-redux'
import { addCountries } from '../features/countries/countriesSlice'

export function useCountries () {
  const countries = useSelector((state) => state.countries.currentCountries)
  const dispatch = useDispatch()

  useEffect(() => {
    getCountries().then((newCountries) => {
      dispatch(addCountries(newCountries))
    })
  }, [dispatch])

  return { countries }
}
