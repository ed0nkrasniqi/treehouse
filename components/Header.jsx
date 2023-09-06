import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex sticky items-center justify-between py-5">
          <div>
            <Link className="text-2xl font-bold " href="/">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex text-xl">
              <li className="px-8">
                <Link href="/">Home</Link>
              </li>
              <li className="px-8">
                <Link href="/about">About</Link>
              </li>
              <li className="px-8">
                <Link href="/catalog">Catalog</Link>
              </li>
              <li className="px-8">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="p-2" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Show the close icon when the menu is open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8" // Increase the icon size
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Show the menu icon when the menu is closed
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8" // Increase the icon size
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full mt-5 bg-white md:hidden">
           
            <ul className="flex flex-col text-3xl">
              <li className="md:px-8 pl-5 pb-10">
                <Link className="border-black border-b-2 " href="/">Home</Link>
              </li>
              <li className="md:px-8 pl-5 pb-10">
                <Link className="border-black border-b-2" href="/about">About</Link>
              </li>
              <li className="md:px-8 pl-5 pb-10">
                <Link className="border-black border-b-2" href="/catalog">Catalog</Link>
              </li>
              <li className="md:px-8 pl-5 pb-10">
                <Link className="border-black border-b-2" href="/blog">Blog</Link>
              </li>
            </ul>
        
            <button
              className="p-2 absolute top-0 right-0"
              onClick={toggleMenu}
            >
          
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10" 
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
