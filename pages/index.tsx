import React from 'react';
import type { NextPage } from 'next';
import PageHead from '@/common/components/pageHead';
import RootLayout from '@/layouts/RootLayout';
import { Typography } from 'antd';

const Home: NextPage = () => {
    return (
        <>
            <PageHead title="Home" />
            <RootLayout>
                <Typography.Text>Home Page</Typography.Text>
            </RootLayout>
        </>
    );
};

export default Home;
