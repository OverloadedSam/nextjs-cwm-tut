'use client';
import React from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  console.log('Err -> ', error);

  return (
    <div>
      <div>An un expected error has occurred!</div>
      <button className='btn' onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
