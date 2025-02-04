import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { LocaleLayoutProps } from "./LocaleLayout-types";
// import { getMessages } from "next-intl/server";
import { AppLayout } from "../AppLayout/AppLayout";
import { ReduxProvider } from "@/resources/providers/reduxProvider";

export const LocaleLayout = async (props: LocaleLayoutProps) => {
    const { children, params } = props;
    const { locale } = await params;

    // const messages = await getMessages();
    const messages = (await import(`../../../../messages/${locale}.json`)).default;

    console.log("Loaded messages:", messages);

    return (
        <html lang={locale}>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/images/mini-ill.svg" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <ReduxProvider>
                        <AppLayout>{children}</AppLayout>
                    </ReduxProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};
