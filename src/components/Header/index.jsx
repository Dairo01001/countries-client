import Filters from '../Filters'
import NewActivity from '../NewActivity'
import Search from '../Search'

export default function Header () {
  return (
    <header className='flex gap-4 justify-center'>
      <Search />
      <Filters />
      <NewActivity />
    </header>
  )
}
