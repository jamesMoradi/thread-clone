import React from 'react'
import Link from 'next/link'
import { TbEdit } from "react-icons/tb";
import UserIcon from '@/components/UserIcon';
import Image from 'next/image';

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    id ?: string | null | undefined;
    bio ?: string | null | undefined
}

const ProfileHeader = ({userData} : {userData : User}) => {
    return (
    <div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <div>
            {userData.image ? 
            <Image src={userData.image} width={20} height={20} alt=''/> : 
            <UserIcon children={userData.name![0]}/>}
          </div>
          <div>
            <h2>{userData.name}</h2>
            <h3>{userData.email}</h3>
          </div>
        </div>
        <div>
          <Link href={'/profile/edit'} className='flex flex-row items-center gap-2'>
            <TbEdit /> Edit Profile
          </Link>
        </div>
      </div>
      <div>
        {/* <p>{bio}</p> */}
      </div>
    </div>
  )
}

export default ProfileHeader