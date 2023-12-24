import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()

export const POST = async (req : NextRequest) => {
    const {name, username, email, password} = await req.json()

    console.log({name, username, email, password});
    
    if (!name || !username || !email || !password) {
        return NextResponse.json('something is missedd...')
    }

    const res = await prisma?.user.create({
        data : {
            name,
            username,
            password,
            email
        }
    })

    return NextResponse.json({res})
}