import React from 'react';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'antd/dist/antd.css';
import 'styles/output.scss';
import 'styles/globals.css';
import '../styles/override.scss';
import '../styles/nprogress.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
