'use client'

import { PrismaClient } from '@prisma/client';
import React, {useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa"; //before hit
import { FaHeart } from "react-icons/fa"; //after hit

const prisma = new PrismaClient()

const LikeBtn = ({id} : {id : string}) => {
  const [isLiked, setIsLiked] = useState<boolean>()
  const [likes, setLikes] = useState()

  useEffect(() => {
    fetch((`/api/like?id=${id}`))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      
      setLikes(res)
    })
  }, [])

  const likeHandler = async (num : number) => {
    const res = await fetch('/api/like', {
      method : 'PATCH',
      body : JSON.stringify({num, id})
    })

    const data = await res.json() 
    setLikes(data.likes)
    setIsLiked(prev => !prev)
  }

  return (
    <div className='flex flex-row  items-center gap-2'>
      <p>{likes}</p>
      {isLiked ? 
      <FaHeart onClick={() => likeHandler(-1)}/> : 
      <FaRegHeart onClick={() => likeHandler(1)}/>}
    </div>
  )
}

export default LikeBtn