"use client";

import { HomeIcon, HomeModernIcon } from '@heroicons/react/16/solid';
import {
    Navbar,
    NavbarContent,
    NavbarMenuToggle,
    NavbarBrand,
   
   
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props{
    children : ReactNode;
}

const Appbar = ( {children}: Props ) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar className="shadow-md" onMenuOpenChange={setIsMenuOpen}>
            {/* Left Side: Brand */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link
                        href="/"
                        className="flex items-center text-primary-200 hover:text-primary-700 transition-colors"
                    >
                        <HomeIcon className="w-16" />
                        <p className="font-bold text-inherit">VM Real Estate</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* Center Content: Navigation Links */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                
            </NavbarContent>

            {/* Right Side: Login and Sign-Up */}
            <NavbarContent justify="end">
                {children}
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link href="#">Features</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#">Customers</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#">Integrations</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#">Login</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Appbar;
