import { getRequestConfig } from "next-intl/server";
import { isLocaleValid } from "./types";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!isLocaleValid(locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
