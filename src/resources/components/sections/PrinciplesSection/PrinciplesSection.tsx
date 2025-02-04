"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export const PrinciplesSection = () => {
    const principles = useTranslations("principles");

    const steps = [
        {
            title: `${principles("principle1Header")}`,
            description: [
                { header: principles("principle1.timeCapsuleHeader"), text: principles("principle1.timeCapsule") },
                { header: principles("principle1.immutabilityHeader"), text: principles("principle1.immutability") },
                { header: principles("principle1.NFTHeader"), text: principles("principle1.NFT") },
                { header: principles("principle1.VRHeader"), text: principles("principle1.VR") },
            ],
        },
        {
            title: `${principles("principle2Header")}`,
            description: [
                { header: principles("principle2.personalHeader"), text: principles("principle2.personal") },
                { header: principles("principle2.familyHeader"), text: principles("principle2.family") },
                { header: principles("principle2.friendsHeader"), text: principles("principle2.friends") },
            ],
        },
        {
            title: `${principles("principle3Header")}`,
            description: [
                { header: principles("principle3.safetyHeader"), text: principles("principle3.safety") },
                { header: principles("principle3.usageHeader"), text: principles("principle3.usage") },
                { header: principles("principle3.flexibilityHeader"), text: principles("principle3.flexibility") },
            ],
        },
    ];

    return (
        <section className="bg-black text-white py-16 px-4 lg:px-16 ">
            <h2 className="text-[26px] lg:text-[48px] font-bold text-center mb-8">{principles("operatingPrinciples")}</h2>

            <div className="hidden grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1280px] lg:mx-auto lg:grid">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`text-left py-[15px] px-[38px] rounded-lg ${
                            index === 1 ? "bg-primary" : "bg-[#262626]"
                        }`}
                    >
                        <h3 className="text-xl font-bold mb-2 text-white ">{step.title}</h3>
                        {step.description.map((item, i) => (
                            <div key={i} className="mb-4  ">
                                <p className="font-bold inline-block text-white">{item.header}</p>{" "}
                                <span className="text-white">{item.text}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-2 max-w-[1280px] lg:mx-auto lg:hidden">
                {steps.map((step, index) => (
                    <details
                        key={index + "t"}
                        className={`group py-3 px-2 cursor-pointer text-white ${
                            index === 1 ? "bg-primary" : "bg-[#262626]"
                        }`}
                    >
                        <summary className="flex items-center justify-between font-bold text-[24px]">
                            {step.title}

                            <Image
                                className="transform transition-transform duration-300 group-open:rotate-180"
                                src="/assets/icons/whiteArrow.svg"
                                height={8}
                                width={16}
                                alt="open"
                            />
                        </summary>

                        <div className="mt-2">
                            {step.description.map((item, i) => (
                                <div key={i + "y"} className="mb-4 text-[18px]">
                                    <p className="font-bold inline-block text-white">{item.header}</p>

                                    <span className="text-white">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

PrinciplesSection.displayName = "PrinciplesSection";
