import { useEffect, useState } from 'react'
import { getCountry } from '../services/countries'

export const useCountry = ({ id }) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getCountry({ id }).then((data) => {
      setCountry(data)
    })
  }, [id])

  return { country }
}
