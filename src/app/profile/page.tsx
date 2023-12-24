'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'

const page = () => {
    const res = useSession()
    console.log(res);
    
  return (
    <div>page</div>
  )
}

export default page