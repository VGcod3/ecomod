'use client';
import Image from "next/image";
import { useState } from "react";
import useSmoothScrollTo from '@/utils/useSmoothScrollTo';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { FaPhone, FaInstagram, FaSquareFacebook } from "react-icons/fa6";

import Drawer from "@/components/Drawer";


import * as Dialog from "@radix-ui/react-dialog";


import './Menu.scss';


type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    {
        name: "Чому ми",
        href: "#whywe"
    },
    {
        name: "Будинки",
        href: "#houses"
    },
    {
        name: "Контакти",
        href: "#contacts"
    },
    {
        name: "Faq",
        href: "#faq"
    }
]


const Menu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScrollClick = useSmoothScrollTo();

    return (
        <header className="p-6 flex w-full max-w-7xl mx-auto justify-between items-center z-20  text-neutral-100">
            <Image alt='logo' width={100} height={100} src={'logo.svg'} className="w-16 h-16" />

            <nav className="hidden lg:flex gap-14">
                {
                    navigation.map(link => (
                        <span
                            onClick={() => handleScrollClick(link.href)}
                            key={link.href}
                            className={`cursor-pointer hover:text-my-cyan hover:scale-105`}>
                            {link.name}
                        </span>
                    ))
                }
            </nav>

            <section className="hidden lg:flex gap-14">
                <FaSquareFacebook className="social" />

                <FaInstagram className="social" />

                <FaPhone className="social" />
            </section>


            <Dialog.Root >
                <div className="flex lg:hidden">
                    <Dialog.Trigger asChild>
                        <button
                            type="button"
                            className="relative z-10 inline-flex items-center justify-center rounded-md text-white bg-transparent border-none"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                    </Dialog.Trigger>
                </div>
                <Drawer setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />
            </Dialog.Root>

        </header>
    )
}

export default Menu;