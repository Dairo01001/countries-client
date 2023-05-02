import axios from 'axios'

export async function createActivity (data) {
  try {
    return (await axios.post('/api/activities', data)).data
  } catch (error) {
    throw new Error(error.response.data.msg)
  }
}

export async function getActivities () {
  return (await axios.get('/api/activities')).data
}

export async function updateActivity (data) {
  try {
    return (await axios.put('/api/activities', data)).data
  } catch (error) {
    throw new Error(error.response.data.msg)
  }
}

export async function deleteActivity ({ id }) {
  try {
    return (await axios.delete(`/api/activities/${id}`)).data
  } catch (error) {
    console.log()
    throw new Error(error.response.data.msg)
  }
}
