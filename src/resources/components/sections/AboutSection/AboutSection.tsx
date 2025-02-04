"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutSection = () => {
    const about = useTranslations("about");

    return (
        <section className="bg-black text-white py-16 px-4 lg:px-16 flex flex-col md:flex-row items-center" id="#about">
            <div className="max-w-[1280px] flex wrap justify-between mx-auto items-center flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-2/4 text-center  lg:text-left">
                    <h2 className="text-[26px] lg:text-[48px] font-bold mb-4 ">{about("aboutProject")}</h2>

                    <p className="mb-4 text-[26px] text-xl">{about("descr1")}</p>

                    <p className="text-[26px] text-xl">
                        {about("descr2")}
                    </p>
                </div>

                <div className=" ">
                    <Image
                        src="/assets/coin.svg"
                        alt="Memory Logo"
                        className="w-330 h-330 object-contain"
                        width={330}
                        height={330}
                    />
                </div>
            </div>
        </section>
    );
};

AboutSection.displayName = "AboutSection";
