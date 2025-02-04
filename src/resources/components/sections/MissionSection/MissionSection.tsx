"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export const MissionSection = () => {
    const mission = useTranslations("mission");

    return (
        <section className="py-16 bg-white text-center p-4">
            <h2 className="text-[26px] lg:text-[48px] font-bold mb-6">{mission("precious")}</h2>

            <p className="text-2xl lg:text-xl text-gray-700 max-w-2xl mx-auto mb-12">{mission("description")}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1280px] mx-auto gap-[34px]">
                <div className="w-full flex flex-col items-center justify-start gap-2">
                    <Image src="/assets/icons/lamp.svg" width={33} height={22} alt="lamp" />

                    <h3 className="text-3xl lg:text-[26px] font-semibold">{mission("innovation")}</h3>

                    <p className="text-2xl lg:text-base">{mission("innovationDescpription")}</p>
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-2">
                    <Image src="/assets/icons/lock.svg" width={27} height={30} alt="lock" />

                    <h3 className="text-3xl lg:text-[26px] font-semibold">{mission("safety")}</h3>

                    <p className="text-2xl lg:text-base">{mission("safetyDescpription")}</p>
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-2">
                    <Image src="/assets/icons/people.svg" width={42} height={31} alt="people" />

                    <h3 className="text-3xl lg:text-[26px] font-semibold">{mission("greeting")}</h3>

                    <p className="text-2xl lg:text-base">{mission("greetingDescpription")}</p>
                </div>
            </div>
        </section>
    );
};

MissionSection.displayName = "MissionSection";
