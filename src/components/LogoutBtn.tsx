import Link from 'next/link'
import React from 'react'
import { TbLogout } from 'react-icons/tb'

const LogoutBtn = () => {
    return (
    <Link 
    className='flex p-4 flex-row items-center gap-5 ' 
    href={'/api/auth/signout'}>
        <TbLogout/> log out
    </Link>
  )
}

export default LogoutBtn