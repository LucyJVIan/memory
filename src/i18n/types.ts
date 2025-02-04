import { routing } from "@/i18n/routing";

export const isLocaleValid = (content: unknown): content is (typeof routing.locales)[number] => {
    return typeof content === "string" && Array.from<string>(routing.locales).includes(content);
};

export interface ParamsWithLocale {
    locale: string | undefined;
}

export interface PropsWithClassName {
    className?: string;
}
