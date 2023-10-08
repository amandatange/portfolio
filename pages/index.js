import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
};

export default index;
