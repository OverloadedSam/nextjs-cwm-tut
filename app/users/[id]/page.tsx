import { notFound } from 'next/navigation';
import React from 'react';

interface UserDetailPageProps {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: UserDetailPageProps) => {
  console.log(id);
  if (id > 10) notFound();

  return <div>UserDetailPage</div>;
};

export default UserDetailPage;
