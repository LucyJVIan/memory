"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const BottomNav = () => {
    const bottomNav = useTranslations("bottomNav");
    const footer = useTranslations("footer");

    return (
        <nav className="bg-white py-4 ">
            <ul className="flex justify-center gap-x-6 text-black text-sm md:text-xl lg:text-base">
                <li className="hidden lg:block">
                    <Link href="#about" className="hover:text-black">
                        {bottomNav("about")}
                    </Link>
                </li>

                <li className="hidden lg:block">
                    <Link href="#how-it-works" className="hover:text-gray-600">
                        {bottomNav("howWorks")}
                    </Link>
                </li>

                <li className="hidden lg:block">
                    <Link href="#roadmap" className="hover:text-gray-600">
                        {bottomNav("roadmap")}
                    </Link>
                </li>

                <li className="block lg:hidden">
                    <Link href="#terms" className="hover:text-gray-600">
                        {footer("conditions")}
                    </Link>
                </li>

                <li className="block lg:hidden">
                    <Link href="#whitepaper" className="hover:text-gray-600">
                        {footer("whitePaper")}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

BottomNav.displayName = "BottomNav";
