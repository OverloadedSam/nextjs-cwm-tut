import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface UserPageProps {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: UserPageProps) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href='/users/new' className='btn'>
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
