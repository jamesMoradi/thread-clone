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
        body : body as string,
        userId : session.user!.id,
        likes : 0,
      }
    })

    if (res?.body) {
      redirect('/profile')
    }
    
    
  }
    
  return (
    <section className='p-10'>
      <form action={postHandler}>
        <div className='mb-5'>
          <textarea 
          className='text-black w-full h-[80vh] rounded-md p-2 resize-none transition-all
          bg-dark-4 focus:bg-light-4 focus:border-none focus:outline-none' 
          name="body" id="" placeholder='Thread Body'/>
        </div>
        <div className='mb-5'>
          <input 
          type="submit" 
          value={'add thread'} 
          className='bg-primary-500 hover:bg-blue 
          transition-colors w-full capitalize py-3 rounded-md' />
        </div>
      </form>
    </section>
  )
}

export default page