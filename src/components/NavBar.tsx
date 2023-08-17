import React from 'react';
import Image from 'next/image'

const NavItem = ({title} : {title: string}) => {
    return <div className='text-lg hidden md:block'>{title}</div>
}

export default function NavBar() {
    return <nav className='flex gap-10 pt-5 px-5 md:px-0  lg:gap-16 items-center justify-between md:justify-center w-full'>
        <NavItem title="HOME" />
        <NavItem title="SERVICES" />
        <NavItem title="BLOG" />
        <div>
            <Image
              src="/logomiemi.png"
              alt="VlOGO"
              className="w-14 md:w-28 h-auto"
              width={200}
              height={200}
              priority
            />
        </div>
        <div className='md:hidden'>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div>
        <NavItem title="ABOUT" />
        <NavItem title="PORTFOLIO" />
        <NavItem title="CONTACT" />
        
    </nav>
}