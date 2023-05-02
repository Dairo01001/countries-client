import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const { message, statusText } = useRouteError()

  return (
    <div>
      <h1>Opps!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  )
}
