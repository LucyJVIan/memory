"use client";

import Link from "next/link";
import { headerFlags, localeLanguageSwitch, useHeaderLinks } from "./Header.const";
import { useMemo } from "react";
// import Image from "next/image";
import Dropdown from "../UI/dropdown/Dropdown";
import { useParams, useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export const Header = () => {
    const params = useParams();
    const router = useRouter();
    const locale = params.locale;

    const headerLinks = useHeaderLinks();

    const renderHeaderLinks = useMemo(() => {
        return headerLinks.map((item, index) => (
            <li key={index}>
                <Link href={item.link} className="hover:text-gray-300 text-white text-[18px]">
                    {item.title}
                </Link>
            </li>
        ));
    }, []);

    return (
        <header className="p-4 z-50 justify-between items-center flex bg-black bg-opacity-0 lg:bg-opacity-100 text-white h-[74px] -mb-[75px] lg:mb-0">
            <div
                className="text-lg font-bold cursor-pointer hover:text-gray-300 z-20 flex space-x-2 items-center"
                onClick={() => router.push(`/${locale}`)}
            >
                <img src="/assets/coin.svg" alt="" />
                <p className="text-[40px] font-bold">Memory Token</p>
            </div>

            <nav className="hidden lg:flex z-20">
                <ul className="flex space-x-4 justify-between items-center">{renderHeaderLinks}</ul>
            </nav>

            <Formik initialValues={{ locale: { locale } }} onSubmit={(values) => console.log(values)} className=" z-20">
                <Form>
                    <Dropdown name={localeLanguageSwitch(locale)} options={headerFlags} />
                </Form>
            </Formik>

            <BurgerMenu />
        </header>
    );
};

Header.displayName = "Header";
