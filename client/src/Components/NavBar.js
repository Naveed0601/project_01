import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../Store/auth";

function NavBar() {
  const [nav, setNav] = useState(false);
  const { isloggedIn } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between p-5 bg-[#1a1a1a] items-center border-b text-xl">
      <h1 className="text-4xl text-white">Mohd Abdul Naveed</h1>
      <ul className="hidden md:flex gap-6 text-white pr-10 font-bold">
        <Link to="/" className=" hover:text-purple-600">
          <li>Home</li>
        </Link>
        <Link to="/About" className=" hover:text-purple-600">
          <li>About</li>
        </Link>
        <Link to="/Contact" className=" hover:text-purple-600">
          <li>Contact</li>
        </Link>
        {isloggedIn ? (
          <Link to="/Logout" className="hover:text-purple-700 font-bold ">
            <li>Logout</li>
          </Link>
        ) : (
          <div className="flex ">
            <Link to="/Login" className=" hover:text-purple-600 mr-5">
              <li>Login</li>
            </Link>
            <Link to="/Register" className=" hover:text-purple-600">
              <li>Register</li>
            </Link>
          </div>
        )}
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {nav ? (
          <FaTimes className="text-yellow-300 text-3xl" />
        ) : (
          <GiHamburgerMenu className="text-yellow-300 text-3xl" />
        )}
      </div>
      <ul
        className={`${
          nav
            ? "text-white opacity-100 transform translate-x-0"
            : "opacity-0 tranform -translate-y-full"
        } translate-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to="/" className="p-2 hover:text-purple-700 font-bold">
          <li>Home</li>
        </Link>
        <Link to="/About" className="p-2 hover:text-purple-700 font-bold">
          <li>About</li>
        </Link>
        <Link to="/Contact" className="p-2 hover:text-purple-700 font-bold">
          <li>Contact</li>
        </Link>
        <Link to="/Login" className="p-2 hover:text-purple-700 font-bold">
          <li>Login</li>
        </Link>
        <Link to="/Register" className="p-2 hover:text-purple-700 font-bold">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
