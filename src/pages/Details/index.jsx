import { useParams } from 'react-router-dom'
import { useCountry } from '../../hooks/useCountry'
import Loading from '../../components/Loading'
import CardCountry from '../../components/CardCountry'
import ActivitiesList from '../../components/Activities'

const Details = () => {
  const { id } = useParams()
  const { country } = useCountry({ id })

  if (!country) {
    return <Loading />
  }

  const { Activities } = country

  return (
    <div
      className='container flex gap-3 justify-center content-center'
      style={{ marginTop: '3%' }}
    >
      <div className='w-1/2 flex justify-center'>
        <CardCountry country={country} />
      </div>
      <div className='w-1/2'>
        <ActivitiesList activities={Activities} />
      </div>
    </div>
  )
}

export default Details
