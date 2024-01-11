import React from 'react';

interface PhotoPageProps {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = ({ params: { id, photoId } }: PhotoPageProps) => {
  console.log({ id, photoId });
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
