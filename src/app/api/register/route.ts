import { NextRequest, NextResponse } from "next/server";

export const POST =async (req : NextRequest) => {
    const {name, username, email, password} = await req.json()

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

    return NextResponse.json(res)
}