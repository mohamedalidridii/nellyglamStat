import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-opacity-90 sticky top-3 lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
                <div className="container flex flex-wrap items-center justify-between mx-auto blur-none">
                    <Link href="/clinique"
                        className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
                        <img src="/mini.png" alt="" className='w-20' />
                    </Link>
                    <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center`}>
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/clinique" className="flex items-center">Acceuil</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/clinique" className="flex items-center">clinique</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/cosmetique" className="flex items-center">cosmetiques</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/rendezVous" className="flex items-center">rendez-vous</a>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)} // Toggle l'état du menu
                    >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
  )
}

export default Navbar