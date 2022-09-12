import React from 'react';
import 'antd/dist/antd.css';
import 'styles/output.scss';
import 'styles/globals.css';
import '../styles/override.scss';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
