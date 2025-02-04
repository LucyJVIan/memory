import { useTranslations } from "next-intl";

export const useHeaderLinks = () => {
    const header = useTranslations("header");

    const headerLinks = [
        { link: "#about", title: header("about") },
        { link: "#how", title: header("howWorks") },
        { link: "#roadmap", title: header("roadmap") },
        { link: "#contacts", title: header("contactUs") },
        { link: "#buy", title: header("howBuy") },
    ];

    return headerLinks;
};

export const headerFlags = [
    { flag: "/assets/icons/flags/gb.svg", title: "English", language: "en" },
    { flag: "/assets/icons/flags/ru.svg", title: "Русский", language: "ru" },
    { flag: "/assets/icons/flags/de.svg", title: "Deutsch", language: "de" },
    { flag: "/assets/icons/flags/fr.svg", title: "Français", language: "fr" },
    { flag: "/assets/icons/flags/cn.svg", title: "中文詞彙", language: "cn" },
];

export const localeLanguageSwitch = (locale: string | string[] | undefined) => {
    switch (locale) {
        case "ru":
            return "Русский";
        case "en":
            return "English";
        case "cn":
            return "中文詞彙";
        case "de":
            return "Deutsch";
        case "fr":
            return "Français";
        default:
            return "English";
    }
};
