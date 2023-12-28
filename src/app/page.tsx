import { PrismaClient } from '@prisma/client';
import React from 'react'

const prisma = new PrismaClient()

const page = async () => {
  const threads = await prisma.thread.findMany()
 
  return (
    <div>page</div>
  )
}

export default page