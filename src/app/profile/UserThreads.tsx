import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import { PrismaClient } from '@prisma/client'
import Thread from '@/components/Thread'

const prisma = new PrismaClient()

const UserThreads = async () => {
  const session = await getServerSession(authOptions)
  const threads = await prisma.thread.findMany({
    where : {
      userId : session?.user.id
    }
  })
  
  if (!session?.user.id) {
    return 'login first'
  }

  return (
    <div className='m-5'>
      {threads.map(thread => <Thread 
      id={thread.id}
      author={session.user.name} 
      body={thread.body} 
      image={session.user.image} 
      likes={thread.likes}
      key={thread.id}/>)}
    </div>
  )
}

export default UserThreads