import { AuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'
import bycrypt from 'bcrypt'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const authOptions : AuthOptions = {
    secret : process.env.AUTH_SECRET,
    adapter : PrismaAdapter(prisma),
    providers : [
        CredentialProvider({
            name : 'credentials',
            credentials : {
                username : {label : 'Username', type : 'username', placeholder : 'jsmit'},
                password : {label : 'Password', type : 'password', placeholder: 'sth'},
            },
            authorize : async (credentials) => {

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

                const isMath = user.password === credentials.password

                if (!isMath) {
                    return null
                }

                return {...user}
            },
        })
    ],
    session : {
        strategy : 'jwt'
    },
    callbacks : {
        async session({ session, token }: { session: any; token: any }) {
            const newSession = { ...session };
            newSession.user.id = token.sub as string;
            return newSession;
        },
    }
}

export {authOptions}