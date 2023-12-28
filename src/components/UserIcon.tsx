import React, { ReactNode } from 'react'

const UserIcon = ({children} : {children : ReactNode}) => {
  return (
    <div className='bg-red-900 w-10 h-10 capitalize text-center rounded-full p-2'>
        {children}
    </div>
  )
}

export default UserIcon