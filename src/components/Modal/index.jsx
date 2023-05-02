import PropTypes from 'prop-types'

export default function Modal ({ handleClose, show, children }) {
  return (
    <div
      onClick={handleClose}
      className={`bg-opacity-60 bg-slate-950 grid place-items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full ${
        show ? 'block' : 'hidden'
      }`}
    >
      <section className='m-auto w-fit h-fit'>{children}</section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}
