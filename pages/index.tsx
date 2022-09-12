import React from 'react';
import type { NextPage } from 'next';
import PageHead from '@/common/components/pageHead';
import RootLayout from '@/layouts/RootLayout';
import HomeSection from '@/pageComponents/Home/HomeSection';

const Home: NextPage = () => {
    return (
        <>
            <PageHead title="Home" />
            <RootLayout>
                <HomeSection />
            </RootLayout>
        </>
    );
};

export default Home;
