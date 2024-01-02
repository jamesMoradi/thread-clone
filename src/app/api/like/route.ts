import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const GET =async (req : NextRequest) => {
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id') 

    const thread = await prisma.thread.findUnique({
        where : {
            id : id!
        }
    })

    return NextResponse.json(thread?.likes)
}

export const PATCH = async (req : NextRequest) => {
    const body = await req.json()

    const likes = await prisma.thread.update({
        where : {
          id : body.id
        },
        data : {
          likes : {increment : +body.num}
        }
    })


    if (!likes.likes) {
        return NextResponse.json('u cant like this post')
    }
    
    return NextResponse.json(likes)

}