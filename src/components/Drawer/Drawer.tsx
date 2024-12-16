"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import useSmoothScrollTo from "@/utils/useSmoothScrollTo";

import { FaPhone, FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const locale = useLocale();

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
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
            >
              <div className="h-full">
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
                <div className="mt-6 flow-root flex-col h-full">
                  <div className="-my-6 divide-y divide-neutral-200/20 flex flex-col h-full justify-between">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <span
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleScrollClick(item.href);
                          }}
                          key={item.name}
                          className={`cursor-pointer transition-all -mx-3 block px-3 py-2 text-lg text-center font-semibold leading-7 text-gray-200 hover:text-my-cyan rounded`}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center p-6 justify-evenly text-neutral-100">
                      <Link href="https://www.facebook.com/profile.php?id=100064137518618&locale=uk_UA">
                        <FaSquareFacebook className="social" />
                      </Link>

                      <Link href="https://www.instagram.com/modul_dim?igsh=MTN0NDVteHMzcHowZw==">
                        <FaInstagram className="social" />
                      </Link>

                      <Link href="tel:+380669913454">
                        <FaPhone className="social" />
                      </Link>

                      <Link
                        href={`${locale === "ua" ? "en" : "ua"}`}
                        className="text-2xl"
                      >
                        {locale === "ua" ? "UA" : "EN"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Dialog.Portal>
  );
}
