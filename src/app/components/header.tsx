"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false); // State for mobile menu toggle

  return (
    <div className="Header h-24 bg-[#FFFFFF] flex items-center justify-between px-4 md:px-7 w-full shadow-md">
      {/* Logo Section */}
      <div>
        <img src="/Images/Frame 168.png" alt="Logo" className="Logo h-7" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex">
        <ul className="UL font-medium flex space-x-6 lg:space-x-10">
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/about"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 md:space-x-6">
        <img src="/Images/outline.png" alt="vector" className="h-7 w-7" />
        <img src="/Images/search.png" alt="search" className="h-7 w-7" />
        <img src="/Images/heart.png" alt="Favourite" className="h-7 w-7" />
        <img src="/Images/cart.png" alt="cart" className="h-7 w-7" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src="/Images/menu.png" alt="Menu" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <Link href={"/home"} onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link href={"/shop"} onClick={() => setShowMenu(false)}>
          Shop
        </Link>
        <Link href={"/about"} onClick={() => setShowMenu(false)}>
          Blog
        </Link>
        <Link href={"/contact"} onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
}
