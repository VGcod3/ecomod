"use client";
import useSmoothScrollTo from "@/utils/useSmoothScrollTo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

import { FaInstagram, FaPhone, FaSquareFacebook } from "react-icons/fa6";

import Drawer from "@/components/Drawer";

import * as Dialog from "@radix-ui/react-dialog";

import "./Menu.scss";

import { useTranslations, useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { Link } from "@/i18n/routing";

type MenuItem = {
  name: string;
  href: string;
};

const Menu = () => {
  const t = useTranslations();

  const locale = useLocale();

  const navigation: MenuItem[] = [
    {
      name: t("nav.whyUs"),
      href: "#whyUs",
    },
    {
      name: t("nav.planning"),
      href: "#innerPlanning",
    },
    {
      name: t("nav.forBusiness"),
      href: "#investment",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <header className="p-6 flex w-full max-w-7xl mx-auto justify-between items-center z-20  text-neutral-100">
      <Image
        alt="logo"
        width={100}
        height={100}
        src={"logo.svg"}
        className="w-32 h-16"
      />
      <nav className="hidden lg:flex gap-14">
        {navigation.map((link) => (
          <span
            onClick={() => handleScrollClick(link.href)}
            key={link.href}
            className={`cursor-pointer hover:text-my-cyan hover:scale-105`}
          >
            {link.name}
          </span>
        ))}
      </nav>

      <section className="hidden lg:flex gap-14">
        <Link href="https://www.facebook.com/profile.php?id=100064137518618&locale=uk_UA">
          <FaSquareFacebook className="social" />
        </Link>

        <Link href="https://www.instagram.com/modul_dim?igsh=MTN0NDVteHMzcHowZw==">
          <FaInstagram className="social" />
        </Link>

        <Link href="tel:+380669913454">
          <FaPhone className="social" />
        </Link>
        <Link href={`${locale === "ua" ? "en" : "ua"}`} className="text-2xl">
          {locale === "ua" ? "UA" : "EN"}
        </Link>
      </section>

      <Dialog.Root>
        <div className="flex lg:hidden">
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="relative z-10 inline-flex items-center justify-center rounded-md text-gray-100 bg-transparent border-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
        </div>
        <Drawer
          setMobileMenuOpen={setMobileMenuOpen}
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
        />
      </Dialog.Root>
    </header>
  );
};

export default Menu;
