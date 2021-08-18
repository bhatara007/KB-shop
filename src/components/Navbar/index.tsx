import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="h-40 bg-transparent flex justify-between m-6">
      <div className="pl-7">
        <p> LOGO </p>
      </div>
      <div className="pr-5 space-x-6">
        <Link href="/">Product</Link>
        <Link href="/">Groupbuy</Link>
        <Link href="/">Upcoming</Link>
        <Link href="/">Help</Link>
      </div>
    </div>
  );
};

export default Navbar;
