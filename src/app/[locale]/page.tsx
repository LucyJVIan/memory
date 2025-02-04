import { MainPage } from "@/resources/pages";
// import enMessages from "../../../messages/en.json";
// import ruMessages from "../../../messages/ru.json";
// import deMessages from "../../../messages/de.json";
// import frMessages from "../../../messages/fr.json";
// import cnMessages from "../../../messages/cn.json";

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ru" }, { locale: "de" }, { locale: "cn" }, { locale: "fr" }];
}

export async function generateMetadata(
    // { params }: { params: Promise<{ locale: string }> }
) {
    // const locale = (await params).locale;

    // const messages =
    //     locale === "ru"
    //         ? ruMessages
    //         : locale === "en"
    //         ? enMessages
    //         : locale === "de"
    //         ? deMessages
    //         : locale === "fr"
    //         ? frMessages
    //         : cnMessages;

    return {
        title: "t",
        description: "Save your soul",


        // openGraph: {
        //     title: messages.helmet.header,
        //     description: messages.helmet.description,
        //     images: "https://hobby-one-tan.vercel.app/images/mini-ill.svg", //test
        // },

        // alternates: {
        //     canonical: "https://hobbyvillage.ru",
        // },
    };
}

export default function Page() {
    return <MainPage />;
}
