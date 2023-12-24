import { AuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'
import bycrypt from 'bcrypt'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const authOptions : AuthOptions = {
    adapter : PrismaAdapter(prisma),
    providers : [
        CredentialProvider({
            name : 'credentials',
            credentials : {
                username : {label : 'Username', type : 'username', placeholder : 'jsmit'},
                password : {label : 'Password', type : 'password', placeholder: 'sth'},
            },
            authorize : async (credentials, req) => {

                if (!credentials?.username || !credentials?.password) {
                    return null
                }
                
                //to see if user exists
                const user = await prisma?.user.findUnique({
                    where : {
                        username : credentials.username
                    }
                })
                if (!user) {
                    return null
                }

                //to see if password is match
                const isMath = user.password === credentials.password
                if (!isMath) {
                    return null
                }

                return user
            },
        })
    ],
    session : {
        strategy : 'jwt'
    }
}

export {authOptions}