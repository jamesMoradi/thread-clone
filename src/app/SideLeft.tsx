'use client'

import React from 'react'
import Link from 'next/link'
import {TbSmartHome, TbSearch, TbHeart, TbUser, TbUsers, TbLogout} from 'react-icons/tb'
import { LuImagePlus } from "react-icons/lu";
import { usePathname } from 'next/navigation';

const SideLeft = () => {
  const path = usePathname()
  
  const links = [
    {path : '/', pathName : 'home', icon : <TbSmartHome />},
    {path : '/search', pathName : 'search', icon : <TbSearch />},
    {path : '/activity', pathName : 'activity', icon : <TbHeart />},
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
          <li><Link className='flex p-4 flex-row items-center capitalize gap-5 text-2xl' href={'/logout'}><TbLogout/> log out</Link></li>
        </ul>
      </div>
    </aside>
  )
}

export default SideLeft