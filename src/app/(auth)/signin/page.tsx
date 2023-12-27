'use client'
import React,{ChangeEvent, useState} from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const page = () => {
    const router = useRouter()
    const [data,setData] = useState({
        username : '',
        password : '',
    })

    const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...prev, [e.target.name] : e.target.value }
        })
    }

    const onSubmit = async () => {
        if (data.username && data.password) {  
              const res = await signIn('credentials', {...data, redirect : false})
              
              if (res?.ok) {
                router.push('/profile')
              } else {
                alert('username or password is wronog')
              }
            }
        } 
    

  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <h1 className='text-4xl font-bold'>Sign In</h1>
        <form onSubmit={e => e.preventDefault()} className='w-96 block'>
            <div className='mb-5'>
                <input name='username' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="text" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your Username' />
            </div>
            <div className='mb-5'>
                <input name='password' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="password" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your password' />
            </div>
            <div>
                <input onClick={onSubmit} className='p-3 rounded-md w-full cursor-pointer bg-blue hover:bg-[rgb(0,149,246,.9)] transition-colors' 
                type="button" value={'sign in'} />
            </div>
        </form>
    </div>
  )
}

export default page