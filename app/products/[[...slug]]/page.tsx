import React from 'react';

type Props = {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
};

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  console.log({ sortOrder });

  return <div>ProductPage - {slug} - {sortOrder}</div>;
};

export default ProductPage;
