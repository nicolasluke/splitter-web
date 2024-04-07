import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container m-auto">
        <div className="flex justify-between w-100 my-10 items-center">
            <div>Splitter</div>
            <div className="flex justify-end items-center w-1/2">
                <p className="mr-5 text-teal-400 font-semibold">
                    <Link href="../LoginPage">Log in</Link>
                </p>
                <p className="mr-5 p-4 bg-teal-400 rounded-md text-white shadow-sm shadow-slate-500 hover:shadow-none font-semibold">
                    <Link href="../SignUpPage">Sign Up</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar