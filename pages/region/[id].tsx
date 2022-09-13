import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import PageHead from '@/common/components/pageHead';
import RootLayout from '@/layouts/RootLayout';

const Regions = () => {
    const router = useRouter();

    return (
        <>
            <PageHead title="Regions" />
            <RootLayout>
                <Typography.Title>Regions - {router.query?.id}</Typography.Title>
            </RootLayout>
        </>
    );
};

export default Regions;
