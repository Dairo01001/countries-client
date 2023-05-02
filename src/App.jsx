import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'
import NavBar from './components/NavBar'
import ErrorPage from './pages/ErrorPage'
import ActivitiesPage from './pages/ActivitiesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'countries',
        element: <Home />
      },
      {
        path: '/country/:id',
        element: <Details />
      },
      {
        path: '/activities',
        element: <ActivitiesPage />
      }
    ]
  }
])

export default function App () {
  return <RouterProvider router={router} />
}
