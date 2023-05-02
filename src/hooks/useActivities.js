import { useEffect, useState } from 'react'
import { deleteActivity, getActivities } from '../services/activities'

export function useActivities () {
  const [activities, setActivities] = useState(null)

  const handleDelete = ({ id }) => {
    deleteActivity({ id }).then(() =>
      getActivities().then((data) => setActivities(data))
    )
  }

  useEffect(() => {
    getActivities().then((data) => setActivities(data))
  }, [])

  return { activities, handleDelete }
}
