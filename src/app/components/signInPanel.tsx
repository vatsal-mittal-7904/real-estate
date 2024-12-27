import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'
import UserProfilePanel from './UserProfilePanel';
import prisma from '@/lib/prisma';

const signInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const dbUser = await prisma.user.findUnique({
    where:{
      id : (await getUser())?.id,
    },
  });


  if (await isAuthenticated()) 
    return(
     <>{ dbUser!! && <UserProfilePanel user = {dbUser} />} </>
    ) 

  return (
    <div className="flex gap-3">
      <button color="primary">
        <LoginLink> Sign In </LoginLink>
      </button>
      <button color="primary">
        <RegisterLink> Sign Up </RegisterLink>
      </button>

    </div>
  )
}

export default signInPanel