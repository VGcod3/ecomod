'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useEffect } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import useSmoothScrollTo from '@/utils/useSmoothScrollTo';

import { FaPhone, FaInstagram, FaSquareFacebook } from "react-icons/fa6";


interface drawerProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navigation: MenuItem[];
}

type MenuItem = {
    name: string;
    href: string;
};

export default function Drawer({
    setMobileMenuOpen,
    navigation,
    mobileMenuOpen,
}: drawerProps) {
    const handleScrollClick = useSmoothScrollTo();

    useEffect(() => {
        // Toggle body overflow when the drawer opens or closes
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup the effect
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    return (
        <Dialog.Portal>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: '0%' }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <Dialog.Close asChild>
                                        <button
                                            type="button"
                                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <Cross1Icon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </Dialog.Close>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6 border-b-neutral-100 border-b">

                                            {navigation.map((item) => (
                                                <span
                                                    onClick={() => {
                                                        setMobileMenuOpen(false);
                                                        handleScrollClick(item.href)
                                                    }}
                                                    key={item.name}
                                                    className={` cursor-pointer transition-all -mx-3 block px-3 py-2 text-lg text-center font-semibold leading-7 text-gray-200 hover:bg-bec-darker rounded`}
                                                >
                                                    {item.name}
                                                </span>
                                            ))}

                                        </div>

                                        <div className="flex items-center p-6 justify-evenly text-neutral-100">

                                            <FaSquareFacebook className="social" />

                                            <FaInstagram className="social" />

                                            <FaPhone className="social" />


                                        </div>


                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Dialog.Portal>
    )
}