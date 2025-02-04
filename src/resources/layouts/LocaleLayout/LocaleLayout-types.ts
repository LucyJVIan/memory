import { PropsWithChildren } from "react";

export interface ParamsWithLocale {
    locale: string | undefined;
}

export interface LocaleLayoutProps extends PropsWithChildren {
    params: Promise<ParamsWithLocale>;
}
