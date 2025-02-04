"use client";

import { BottomNav, Footer, Header } from "@/resources/components";
import { PropsWithChildren, Suspense } from "react";
import { AppLoading } from "./AppLayout-loading";
import Head from "next/head";
import "./globals.css";

export const AppLayout = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/images/mini-ill.svg" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />
            

            <Suspense fallback={<AppLoading />}>{children}</Suspense>

            <BottomNav />

            <Footer />
        </>
    );
};
