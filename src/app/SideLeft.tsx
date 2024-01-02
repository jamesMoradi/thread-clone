'use client'

import React from 'react'
import Link from 'next/link'
import {TbSmartHome, TbSearch, TbHeart, TbUser, TbUsers, TbLogout} from 'react-icons/tb'
import { LuImagePlus } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LogoutBtn from '@/components/LogoutBtn';

const SideLeft = () => {
  const path = usePathname()
  const {data : session} = useSession()

  const links = [
    {path : '/', pathName : 'home', icon : <TbSmartHome />},
    {path : '/search', pathName : 'search', icon : <TbSearch />},
    {path : '/create-Thread', pathName : 'create thread', icon : <LuImagePlus />},
    {path : '/communities', pathName : 'communities', icon : <TbUsers />},
    {path : '/profile', pathName : 'profile', icon : <TbUser />},
  ]

  return (
    <aside className=' h-screen w-fit'>
      <div>
        <ul className='flex flex-col gap-5 h-screen p-5'>
          {links.map(link => <li 
          key={link.path} 
          className={`rounded-md transition-colors 
          ${link.pathName === 'profile' && 'mb-auto'} ${link.path === path && 'bg-primary-500'} `}>
            <Link className='flex p-4 flex-row items-center 
            capitalize gap-5 text-xl ' 
            href={link.path}>{link.icon} {link.pathName}</Link>
            </li>)}
          <li className='text-xl capitalize'>
            {session?.user ?
             <LogoutBtn /> :
             <>
              <Link href={'/signin'}>sign in</Link>/
              <Link href={'/signup'}>sign up</Link>
             </>}
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideLeft