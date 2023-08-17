import React from 'react';
import Image from 'next/image'

const NavItem = ({title} : {title: string}) => {
    return <div className='text-lg hidden md:block'>{title}</div>
}

export default function NavBar() {
    return <nav className='flex gap-10  lg:gap-16 items-center justify-center w-full'>
        <NavItem title="HOME" />
        <NavItem title="SERVICES" />
        <NavItem title="BLOG" />
        <div>
            <Image
              src="/logomiemi.png"
              alt="VlOGO"
              className="w-28 h-auto"
              width={200}
              height={200}
              priority
            />
        </div>
        <NavItem title="ABOUT" />
        <NavItem title="PORTFOLIO" />
        <NavItem title="CONTACT" />
        
    </nav>
}