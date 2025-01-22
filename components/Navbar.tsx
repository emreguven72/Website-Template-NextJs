import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomNavigationMenu } from './CustomNavigationMenu'
import { NavbarSheet } from './NavbarSheet'

const Navbar = () => {
    return (
        <header className='px-8 md:px-20 py-3 shadow-sm sticky top-0 z-50 bg-slate-50'>
            <nav className='flex flex-row justify-between items-center'>
                <Link href="/">
                    <Image className='min-w-24' src="https://placehold.co/150x90" width={150} height={112.5} alt='logo' />
                </Link>

                <div className='md:hidden'>
                    <NavbarSheet />
                </div>

                <div className='hidden md:flex flex-row items-center gap-5'>
                    <CustomNavigationMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar