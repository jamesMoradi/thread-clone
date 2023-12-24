'use client'
import React,{ChangeEvent, useState} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const [data,setData] = useState({
        name : '',
        username : '',
        email : '',
        password : '',
        passwordConfirm : ''
    })

    const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...prev, [e.target.name] : e.target.value }
        })
    }

    const onSubmit = async () => {
        if (data.name && data.email && data.username && data.password && data.passwordConfirm) {
            if (data.password === data.passwordConfirm) {
                const res = await fetch('/api/register', {
                    method : 'POST',
                    body : JSON.stringify(data)
                })
                console.log(res);
                
                if (res.status === 200) {
                    router.push('/login')
                } 
            } else {
                return('password and password confirmation are not match')
            }
        } else {
            alert('something missed')
        }
    }

  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        <form onSubmit={e => e.preventDefault()} className='w-96 block'>
            <div className='mb-5'>
                <input name='name' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="text" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your Name' />
            </div>
            <div className='mb-5'>
                <input name='username' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="text" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your Username' />
            </div>
            <div className='mb-5'>
                <input name='email' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="email" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your Email' />
            </div>
            <div className='mb-5'>
                <input name='password' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="password" onChange={e => onChangeHandler(e)} 
                placeholder='Enter Your password' />
            </div>
            <div className='mb-5'>
                <input name='passwordConfirm' className='p-3 rounded-md w-full bg-dark-4 focus:bg-dark-2 focus:outline-none' 
                type="password" onChange={e => onChangeHandler(e)} 
                placeholder='Password Confirmation' />
            </div>
            <div>
                <input onClick={onSubmit} className='p-3 rounded-md w-full cursor-pointer bg-blue hover:bg-[rgb(0,149,246,.9)] transition-colors' 
                type="button" value={'register'} />
            </div>
        </form>
    </div>
  )
}

export default page