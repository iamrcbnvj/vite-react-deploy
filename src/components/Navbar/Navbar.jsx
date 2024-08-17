import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 max-w-[1240px] mx-auto">
        <h1 className="w-full text-3xl">React.</h1>
        <ul className="hidden md:flex">
          <li className="p-[10px]">Home</li>
          <li className="p-[10px]">Company</li>
          <li className="p-[10px]">Resources</li>
          <li className="p-[10px]">About</li>
          <li className="p-[10px]">Contact</li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div
          className={
            !nav
              ? 'fixed left-[-100%]'
              : 'fixed top-0 left-0 border-r border-r-gray-900 h-full bg-red-100 w-[60%] p-10 ease-in-out duration-500'
          }
        >
          <ul className=" ">
            <li className="p-[10px]">Home</li>
            <li className="p-[10px]">Company</li>
            <li className="p-[10px]">Resources</li>
            <li className="p-[10px]">About</li>
            <li className="p-[10px]">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
