"use client";

import { useTranslations } from "next-intl";

export const RoadmapSection = () => {
    const roadmap = useTranslations("roadmap");

    return (
        <section className="bg-white py-16 px-4 md:px-16 text-black">
            <h2 className="text-3xl font-bold text-center mb-8">{roadmap("road")}</h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="text-center">
                    <p className="font-bold text-xl">{roadmap("q125")}</p>

                    <p className="text-gray-600">{roadmap("startToken")}</p>
                </div>

                <div className="border-t-2 border-gray-300 flex-grow md:flex-grow-0 md:border-t-0 md:border-l-2 h-8 w-8"></div>

                <div className="text-center">
                    <p className="font-bold text-xl">{roadmap("q425")}</p>

                    <p className="text-gray-600">{roadmap("become")}</p>
                </div>

                <div className="border-t-2 border-gray-300 flex-grow md:flex-grow-0 md:border-t-0 md:border-l-2 h-8 w-8"></div>

                <div className="text-center">
                    <p className="font-bold text-xl">{roadmap("q326")}</p>

                    <p className="text-gray-600">{roadmap("startCapsule")}</p>
                </div>

                <div className="border-t-2 border-gray-300 flex-grow md:flex-grow-0 md:border-t-0 md:border-l-2 h-8 w-8"></div>

                <div className="text-center">
                    <p className="font-bold text-xl">{roadmap("q127")}</p>

                    <p className="text-gray-600">{roadmap("vr")}</p>
                </div>
            </div>
        </section>
    );
};

RoadmapSection.displayName = "RoadmapSection";
