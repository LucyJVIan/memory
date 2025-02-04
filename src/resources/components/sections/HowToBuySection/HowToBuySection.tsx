"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const HowToBuySection = () => {
    const howToBuy = useTranslations("howToBuy");

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("0x80486e01Dd260e2e838bDD4D408bcF2366154db7");
        } catch (err) {
            console.error("Ошибка при копировании текста:", err);
        }
    };

    return (
        <section className="bg-white text-black text-center max-w-[845px] my-0 mx-2 md:mx-auto px-2">
            <h2 className="text-[26px] lg:text-[48px] font-bold mb-4">{howToBuy("header")}</h2>

            <p className="mb-4 lg:text-[15px] text-xl">{howToBuy("description")}</p>

            <div className="mb-8 text-xl lg:text-lg text-left lg:text-center">
                <p className="break-all inline">Contract: 0x80486e01Dd260e2e838bDD4D408bcF2366154db7</p>

                <Image
                    className="inline ml-2"
                    src="/assets/icons/copy.svg"
                    alt="copy"
                    width={15}
                    height={16}
                    onClick={handleCopy}
                />

                <p>Total supply: 1,000,000,000 </p>

                <h5 className="mt-4">{howToBuy("where")}</h5>

                <p>
                    Jupiter Memory Token Click: <Link href="#">ссылка</Link>
                </p>

                <p>
                    Raydium Swap Click: <Link href="#">ссылка</Link>
                </p>
            </div>
        </section>
    );
};
HowToBuySection.displayName = "HowToBuySection";
