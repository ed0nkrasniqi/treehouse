import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
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
            <ul className="flex  text-xl">
              <li className="px-8">
                <Link href="#">Home</Link>
              </li>
              <li className="px-8">
                <Link href="/about">About</Link>
              </li>
              <li className="px-8">
                <Link href="/catalog">Catalog</Link>
              </li>
              <li className="px-8 relative">
                <button className="flex items-center" onClick={toggleResources}>
                  <span className="mr-1">Resources</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform ${
                      isResourcesOpen ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div className="absolute bg-white py-2 rounded-lg shadow-md z-50">
                    <Link className="block px-4 py-2" href="/">
                      Resource 1
                    </Link>
                    <Link className="block px-4 py-2" href="/">
                      Resource 2
                    </Link>
                    <Link className="block px-4 py-2" href="/">
                      Resource 3
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="p-2" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col text-xl">
              <li className="md:px-8 pl-2 ">
                <Link href="#">Home</Link>
              </li>
              <li className="md:px-8 pl-2 pt-2">
                <Link href="/about">About</Link>
              </li>
              <li className="md:px-8 pl-2 pt-2">
                <Link href="/catalog">Catalog</Link>
              </li>
              <li className="md:px-8 pl-2 pt-2 relative">
                <button className="flex items-center" onClick={toggleResources}>
                  <span className="mr-1">Resources</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform ${
                      isResourcesOpen ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div className="absolute bg-white py-2 rounded-lg shadow-md z-50">
                    <Link className="block px-4 py-2" href="/">
                      Resource 1
                    </Link>
                    <Link className="block px-4 py-2" href="/">
                      Resource 2
                    </Link>
                    <Link className="block px-4 py-2" href="/">
                      Resource 3
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

