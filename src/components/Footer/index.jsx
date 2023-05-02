export default function Footer () {
  return (
    <footer className='p-4 mt-auto bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2023{' '}
        <a href='https://github.com/Dairo01001' target='_blank' className='hover:underline' rel='noreferrer'>
          dairo-dev
        </a>
        . Project source code
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a href='#' className='hover:underline'>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
