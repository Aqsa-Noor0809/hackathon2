"use client";
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
            <Link href={"/Blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 md:space-x-6">
        <img src="/Images/outline.png" alt="vector" className="h-7 w-7" />
        <Link href={"/s-product"}>
          <img src="/Images/search.png" alt="search" className="h-7 w-7" />
        </Link>
        <Link href={"/comparision"}>
          <img src="/Images/heart.png" alt="Favourite" className="h-7 w-7" />
        </Link>
        <Link href={"/cart"}>
          <img src="/Images/cart.png" alt="cart" className="h-7 w-7" />
        </Link>
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
        className={`fixed top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 z-50 transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <Link
          href={"/home"}
          className="w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          href={"/shop"}
          className="w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setShowMenu(false)}
        >
          Shop
        </Link>
        <Link
          href={"/Blog"}
          className="w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setShowMenu(false)}
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}