import { createSlice } from '@reduxjs/toolkit'

export const ALL = 'All'
const ITEMS_PAGE = 8
export const SORTS = ['population', 'area', 'name']

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    allCountries: [],
    regions: [],
    currentCountries: []
  },
  reducers: {
    addCountries: (state, { payload }) => {
      const newContinents = new Set(payload.map(({ region }) => region))

      return {
        ...state,
        allCountries: payload,
        currentCountries: payload,
        regions: [ALL, ...newContinents]
      }
    },
    searchCountries: (state, { payload }) => {
      if (!payload) {
        return { ...state, currentCountries: [...state.allCountries] }
      }
      return {
        ...state,
        currentCountries: state.allCountries.filter((country) =>
          country.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        )
      }
    },
    filterRegions: (state, { payload }) => {
      return {
        ...state,
        currentCountries: state.allCountries.filter(({ region }) =>
          payload === ALL ? true : region === payload
        )
      }
    },
    setPage: (state, { payload }) => {
      const cantPages = state.allCountries.length / ITEMS_PAGE
      const page = (payload < 0 ? payload * -1 : payload) % cantPages
      return {
        ...state,
        currentCountries: state.allCountries.slice(
          page * ITEMS_PAGE,
          page * ITEMS_PAGE + ITEMS_PAGE
        )
      }
    }
  }
})

export const { addCountries, searchCountries, filterRegions, setPage } =
  countriesSlice.actions
export default countriesSlice.reducer
