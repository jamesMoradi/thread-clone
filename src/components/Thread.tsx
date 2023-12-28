import React from 'react'
import LikeBtn from './LikeBtn'
import Image from 'next/image'
import UserIcon from './UserIcon'

interface PropsType {
    title : string
    likes : number
    body : string
    image : string | null | undefined
    author : string
}

const Thread = (props : PropsType) => {
    const {body, image, likes, title, author} = props
  return (
    <div className='border-zinc-800 border-2 p-5 rounded-lg flex flex-col gap-5'>
            <div className='ml-auto'>
              {image ? 
              <Image alt='' src={image} className='w-10 h-10 rounded-full'/> : 
              <UserIcon>{author[0]}</UserIcon>}
            </div>
            <div>
              <h2 className='font-bold capitalize text-3xl'>{title}</h2>
              <p>{body}</p>
            </div>
            <div className='ml-auto'>
              <LikeBtn />
            </div>
          </div>
  )
}

export default Thread