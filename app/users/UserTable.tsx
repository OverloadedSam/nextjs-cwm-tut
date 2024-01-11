import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  sortOrder?: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  const sortedUsers =
    sortOrder === 'name'
      ? sort(users).asc((u) => u.name)
      : sortOrder === 'email'
      ? sort(users).asc((u) => u.email)
      : users;

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href='?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
