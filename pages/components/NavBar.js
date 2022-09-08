import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [show, setShow] = useState(false);
  const showBurger = () => {
    setShow(!show);
    if (show) {
      document.getElementById("navbar-default").classList.remove("hidden");
    }
    else {
      document.getElementById("navbar-default").classList.add("hidden");
    }
  }
  return (
    <nav className="bg-[#18181b] px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Chatr</span>
          </a>
        </Link>

        <button onClick={() => showBurger()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 -50 rounded-lg border border-gray md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">

            <li>
              <Link href="/">
                <a id='Home' className="block py-2 pr-4 pl-3 text-gray rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a id='About' className='block py-2 pr-4 pl-3 text-gray rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent'>About</a>
              </Link>
            </li>
            <li>
              <Link href="/chat">
                <a id='Chat' className='block py-2 pr-4 pl-3 text-gray rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent'>Chat</a>
              </Link>
            </li>
            <li>
              <Link href="/api/auth/login">
                <a id='Login' className='block py-2 pr-4 pl-3 text-gray rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent'>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/SignUp">
                <a id='SignUp' className='block py-2 pr-4 pl-3 text-gray rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent'>Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}