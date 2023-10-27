'use client'
import React from 'react';
import { Link } from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const path = usePathname();
    const links = [
        { href: '/', label: "CWIZ" },
        { href: '/team', label: "Team" },
    ];

    return <nav>
        <ul className="[&_li]:ml-4 ml-12 flex pt-3">
            {links.map((link) => (
                <li key={link.href}>
                    <Link className="relative" href={link.href}>
                        {link.href === path && (
                            <motion.span layoutId="underline"
                            className="absolute left-0 top-full block h-[1px] w-full bg-black"/>
                        )}
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>;
}
export default NavBar;