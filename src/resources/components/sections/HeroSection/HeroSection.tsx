"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const heroSection = useTranslations("heroSection");
    const input = useTranslations("input");
    const buttons = useTranslations("buttons");
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        console.log("Video loaded state changed:", isVideoLoaded);
    }, [isVideoLoaded]);

    return (
        <div>
            <section className="relative lg:h-screen md:h-[50vh] h-[30vh] z-10 ">
                <div className="absolute inset-0 w-full h-full">
                    {/* Фоновая картинка */}
                    <img
                        src="/assets/images/bcg-min.png"
                        alt="Background"
                        className={`absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-500 `}
                    />

                    {/* Видео */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-500 border-red-500 "
                        onLoadedData={() => {
                            console.log("Video loaded successfully");
                            setIsVideoLoaded(true);
                        }}
                    >
                        <source src="/assets/video/zastavka.webm" type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>

                <div
                    className="p-4 absolute inset-0 bg-opacity-50 flex flex-col items-center justify-end
            lg:justify-center text-center text-white z-10 mb-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroSection("title")}</h1>

                    <p className="text-lg md:text-xl mb-6 md:block hidden">{heroSection("description")}</p>

                    <div className="hidden md:flex-col md:flex lg:flex-row space-x-0 lg:space-x-2 gap-2 w-[100%] lg:w-auto">
                        <input
                            type="email"
                            placeholder={input("enterEmail")}
                            className="p-2 rounded-lg text-black w-[100%] lg:w-64"
                        />
                        <button className="bg-red-600 text-white px-4 rounded-lg w-full lg:w-auto">
                            {buttons("subscribe")}
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex flex-col md:hidden w-full p-4 gap-2">
                <input
                    type="email"
                    placeholder={input("enterEmail")}
                    className="p-2 rounded-lg text-black w-full border border-black"
                />
                <button className="bg-red-600 text-white px-4 rounded-lg w-full">{buttons("subscribe")}</button>
            </div>
        </div>
    );
};

HeroSection.displayName = "HeroSection";
