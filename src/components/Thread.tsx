import React from 'react'
import LikeBtn from './LikeBtn'
import Image from 'next/image'
import UserIcon from './UserIcon'

interface PropsType {
    id : string
    likes : number
    body : string
    image : string | null | undefined
    author : string
}

const Thread = (props : PropsType) => {
    const {body, image, likes, author, id} = props
  return (
    <div className='bg-zinc-800 p-5 rounded-lg flex flex-col gap-2 mb-5'>
            <div className='flex flex-col gap-5'>
              <div>
                {image ? 
                <Image alt='' src={image} className='w-10 h-10 rounded-full'/> : 
                <UserIcon>{author[0]}</UserIcon>}
              </div>
              <div>
                <p>{body}</p>
              </div>
              <div>
                <LikeBtn id={id}/>
              </div>
            </div>
          </div>
  )
}

export default Thread