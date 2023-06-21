import { store } from '../../app/store'
import { usersApiSlice } from '../users/usersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
  useEffect(() => {
    console.log('Subscribing')
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
      console.log('Unsubscribing')
      users.unsubscribe()
    }
  }, [])

  return <Outlet />
}

export default Prefetch
