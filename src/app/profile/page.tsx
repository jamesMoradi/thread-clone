import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import Link from 'next/link'
import ProfileHeader from './ProfileHeader'
import UserThreads from './UserThreads'
import { getServerSession } from 'next-auth'

const page = async () => {
    const session = await getServerSession(authOptions)
    
    if(!session?.user.name) {
      return <Link href={'/signin'}>sign in first</Link>
    }

  return (
    <section>
      <ProfileHeader userData={session.user}/>
      <UserThreads />
    </section>
  )
}

export default page