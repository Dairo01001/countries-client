import axios from 'axios'

export async function getCountries () {
  return (await axios.get('/api/countries')).data
}

export async function getCountry ({ id }) {
  return (await axios.get(`/api/countries/${id}`)).data
}
