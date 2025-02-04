"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export const FAQSection = () => {
    const faq = useTranslations("faq");

    const faqs = [
        { question: `${faq("whatIsThis")}`, answer: `${faq("whatIsThisAnswer")}` },
        { question: `${faq("howToCreate")}`, answer: `${faq("howToCreateAnswer")}` },
        { question: `${faq("security")}`, answer: `${faq("securityAnswer")}` },
    ];

    return (
        <section className="bg-white max-w-[845px] my-0 mx-2 md:mx-auto px-2">
            <h2 className="text-[26px] lg:text-[48px] font-bold text-center mb-4">{faq("header")}</h2>

            <h5 className="text-center mb-8">{faq("description")}</h5>

            <div className="w-full">
                {faqs.map((faq, index) => (
                    <details key={index} className="group border-b border-gray-300 py-3 cursor-pointer">
                        <summary className="flex items-center justify-between text-gray-800 font-bold">
                            {faq.question}
                            <Image
                                className="transform transition-transform duration-300 group-open:rotate-180"
                                src="/assets/icons/arrow.svg"
                                height={5}
                                width={10}
                                alt="open"
                            />
                        </summary>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};
FAQSection.displayName = "FAQSection";
