'use client'
import {Inter} from "next/font/google";
import "../styles/globals.scss";
import StoreWrapper from "@/components/wrappers/StoreWrapper";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <StoreWrapper>
            <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
            </html>
        </StoreWrapper>
    );
}
