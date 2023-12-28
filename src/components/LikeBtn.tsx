'use client'

import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa"; //before hit
import { FaHeart } from "react-icons/fa"; //after hit

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setIsLiked(prev => !prev)
  }

  return (
    <div>
      {isLiked ? 
      <FaHeart onClick={likeHandler}/> : 
      <FaRegHeart onClick={likeHandler}/>}
    </div>
  )
}

export default LikeBtn