'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import Link from 'next/link'

const page = () => {
    const {data, status, update} = useSession()
    console.log(data);
    
    if (status === 'loading') {
      return <h1>Loading...</h1>
    }

    if(status === 'unauthenticated') {
      return <Link href={'/signin'}>sign in first</Link>
    }

  return (
    <div>
      {data?.user?.name}
    </div>
  )
}

export default page