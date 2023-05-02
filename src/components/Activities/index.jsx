import PropTypes from 'prop-types'
import CardActivity from '../CardActivity'

export default function Activities ({ activities }) {
  if (!activities.length) {
    return (
      <div className='flex justify-center flex-col content-center h-full w-full shadow dark:bg-gray-800 dark:border-gray-700'>
        <h3 className='text-center text-3xl dark:text-white'>
          {'< Activities not Found >'}
        </h3>
      </div>
    )
  }

  return (
    <div className='grid-container'>
      {activities.map((activity) => (
        <CardActivity key={activity.id} activity={activity} />
      ))}
    </div>
  )
}

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape).isRequired
}
