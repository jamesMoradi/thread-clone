import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const page = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user?.name) {
    return <Link href={'/signin'}>login first</Link>
  }
    
  const postHandler = async (formData : FormData) => {
    'use server'
    const title = formData.get('title')!
    const body = formData.get('body')!

    const res = await prisma?.thread.create({
      data : {
        title : title as string, 
        body : body as string,
        userId : session.user!.id,
        likes : 0,
      }
    })

    if (res?.title) {
      redirect('/activity')
    }
    
    
  }
    
  return (
    <section>
      <form action={postHandler}>
        <div className='mb-5'>
          <input className='text-black' type="text" name="title" />
        </div>
        <div className='mb-5'>
          <input className='text-black' type="text" name="body" id="" />
        </div>
        <div className='mb-5'>
          <input type="submit" value={'add thread'} />
        </div>
      </form>
    </section>
  )
}

export default page