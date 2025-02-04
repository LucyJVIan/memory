"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
    const footer = useTranslations("footer");

    return (
        <footer className="bg-white py-6 text-center text-black text-sm md:text-xl lg:text-base">
            <div className="border-t border-gray-300 mb-4"></div>

            <ul className="flex justify-center gap-x-6">
                <li>
                    <p className="mb-4">© 2025 MemoryToken. All rights reserved.</p>
                </li>

                <li className="hidden lg:block">
                    <Link href="#contact" className="hover:text-gray-600">
                        {footer("feedback")}
                    </Link>
                </li>

                <li className="hidden lg:block">
                    <Link href="#terms" className="hover:text-gray-600">
                        {footer("conditions")}
                    </Link>
                </li>

                <li className="hidden lg:block">
                    <Link href="#whitepaper" className="hover:text-gray-600">
                        {footer("whitePaper")}
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

Footer.displayName = "Footer";
