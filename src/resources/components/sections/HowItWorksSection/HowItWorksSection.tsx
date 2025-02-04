"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export const HowItWorksSection = () => {
    const howWorks = useTranslations("howWorks");

    const steps = [
        {
            img: "/assets/images/img1.jpg",
            description: `${howWorks("download")}`,
        },

        {
            img: "/assets/images/img2.jpg",
            description: `${howWorks("nft")}`,
        },

        {
            img: "/assets/images/img3.jpg",
            description: `${howWorks("vr")}`,
        },
    ];

    return (
        <section className="bg-white py-16 px-4 lg:px-[117px]" id="#how">
            <h2 className="text-[26px] lg:text-[48px] font-bold text-center">{howWorks("header")}</h2>

            <h5 className="text-center mb-8">{howWorks("description")}</h5>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[7%]">
                {steps.map((step, index) => (
                    <div key={index} className="text-center p-2">
                        <Image src={step.img} alt="memory" className="object-cover mb-4 w-full h-auto" width={1000} height={1000} />

                        <p className="text-black text-xl w-full">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

HowItWorksSection.displayName = "HowItWorksSection";
