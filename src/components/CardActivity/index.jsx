import PropTypes from 'prop-types'

export default function CardActivity ({ activity }) {
  const { name, difficulty, duration, season } = activity

  return (
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
        <button
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
        >
          Remove
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

CardActivity.propTypes = {
  activity: PropTypes.object.isRequired
}
