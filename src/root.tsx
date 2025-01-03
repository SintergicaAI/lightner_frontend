import React from "react";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

export function Layout({
                           children,
                       }: {
    children: React.ReactNode;
}) {
    return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                />
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
                <title>Sintergica</title>
                <Meta/>
                <Links/>
            </head>
            <body>
            {children}
            <ScrollRestoration/>
            <Scripts/>
            </body>
            </html>
    );
}

export default function Root() {
    return <Outlet />;
}
