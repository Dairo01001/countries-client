import { useEffect, useMemo, useState } from 'react'

const ITEMS_PAGE = 8

export function usePagination ({ countries }) {
  const [currentPage, setCurrentPage] = useState(0)
  const next = () => {
    if (currentPage < (countries.length / ITEMS_PAGE) - 1) {
      setCurrentPage(currentPage + 1)
    }
  }
  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    setCurrentPage(0)
  }, [countries])

  const pageCountries = useMemo(
    () =>
      countries.slice(
        currentPage * ITEMS_PAGE,
        currentPage * ITEMS_PAGE + ITEMS_PAGE
      ),
    [countries, currentPage]
  )

  return { next, previous, pageCountries }
}
