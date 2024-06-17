// components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a>My Portfolio</a>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:text-gray-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="hover:text-gray-400">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-gray-400">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;