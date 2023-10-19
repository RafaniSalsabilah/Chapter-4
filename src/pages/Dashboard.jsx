import React from 'react'
import { useUserDataQuery } from '../services/auth/getUser'
import { useEffect } from 'react'
import { CookiesKey, CookiesStorage } from '../utils/cookies'

export const Dashboard = () => {
    const { data: dataUser } = useUserDataQuery()

    useEffect(() => {
      console.log(dataUser, 'ini data')
    }, [dataUser])

    const handleLogout = () => {
      CookiesStorage.remove(CookiesKey.AuthToken)
      window.location.reload()
    }
    
  return (
    <div className='flex flex-col'>
      <button onClick={handleLogout} className='mt-[.1rem] bg-red-600 text-white font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Logout</button>
    </div>
  )
}
