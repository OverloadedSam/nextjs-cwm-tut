'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex gap-4 bg-slate-200 p-5 space-x-3'>
      <Link href='/'>Next.js</Link>
      <Link href='/users'>Users</Link>
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link className='ml-3' href='api/auth/signout'>
            Logout
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  );
};

export default Navbar;
