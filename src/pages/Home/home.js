import { getCountries } from '../../services/countries'

export async function loaderHome () {
  const countries = await getCountries()

  return { countries }
}
