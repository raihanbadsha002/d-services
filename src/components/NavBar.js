import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }
    

    return (
        <header className="bg-gray-700 text-gray-50 relative py-4">
        <div className="max-w-7xl mx-auto items-center flex justify-between">
          <div className="">
              <h2 className="text-2xl cursor-pointer">D-Services</h2>
          </div> 
          <div onClick={onClick} className={`
            md:hidden uppercase
          `}>
              <span>Menu</span>
          </div>

          <nav
          className={`
             ${!active && 'hidden'}
             absolute flex flex-col bg-gray-700 top-full w-full left-0 z-20 md:static md:w-auto md:flex
          `}
          >
              <ul className="md:flex-row md:flex">
                  <li className="list-none md:mr-5">
                      <Link className="flex w-full text-base uppercase hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">Home</Link>
                  </li>
                  <li className="list-none md:mr-5">
                      <Link className="flex w-full text-base uppercase hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">Services</Link>
                  </li>
                  <li className="list-none md:mr-5">
                      <Link className="flex w-full text-base uppercase hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">Login</Link>
                  </li>
              </ul>
          </nav>
          </div> 
        </header>
    );
};

export default NavBar;