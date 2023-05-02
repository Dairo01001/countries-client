import Countries from '../../components/Countries'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import { useCountries } from '../../hooks/useCountries'
import { usePagination } from '../../hooks/usePagination'

export default function Home () {
  const { countries } = useCountries()
  const { previous, next, pageCountries } = usePagination({ countries })

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 dark:text-white'>
        Countries App
      </h1>
      <Header />
      <Pagination previous={previous} next={next} />
      <Countries countries={pageCountries} />
    </div>
  )
}
