import { useState } from 'react'
import EditActivity from '../../components/EditActivity'
import Loading from '../../components/Loading'
import { useActivities } from '../../hooks/useActivities'
import PropTypes from 'prop-types'
import { RiDeleteBin2Line, RiEdit2Fill } from 'react-icons/ri'

export default function ActivitiesPage () {
  const { activities, handleDelete } = useActivities()

  if (!activities) {
    return <Loading />
  }

  return (
    <div className='container m-20'>
      <div className='grid-container'>
        {activities.map((activity) => (
          <CardActivity key={activity.id} handleDelete={handleDelete} activity={activity} />
        ))}
      </div>
    </div>
  )
}

function CardActivity ({ activity, handleDelete }) {
  const [acti, setActi] = useState(activity)
  const [edit, setEdit] = useState(false)
  const { name, difficulty, duration, season, id } = acti
  return edit
    ? (
      <EditActivity activity={activity} setActivity={setActi} setEdit={setEdit} />
      )
    : (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-end px-4 pt-4' />
        <div className='flex flex-col items-center pb-10'>
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {name}
          </h5>
          <span className='text-sm capitalize text-gray-500 dark:text-gray-400'>
            {season}
          </span>
          <ul className='divide-y w-full p-4 divide-gray-200 dark:divide-gray-700'>
            <li className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Difficulty
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {`${difficulty} of 5`}
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Duration
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {`${duration} Hrs`}
                </div>
              </div>
            </li>
          </ul>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <button onClick={() => setEdit(true)} className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Edit
              <RiEdit2Fill className='ml-3' />
            </button>
            <button onClick={() => handleDelete({ id })} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
              Delete
              <RiDeleteBin2Line className='ml-3' />
            </button>
          </div>
        </div>
      </div>
      )
}

CardActivity.propTypes = {
  activity: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
}
