import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import PageHead from '@/common/components/pageHead';
import RootLayout from '@/layouts/RootLayout';
import { NextPage, GetServerSideProps } from 'next';
import countries from '@/services/countries';

const Regions: NextPage = ({ data }: any) => {
    const router = useRouter();
    console.log(data);
    return (
        <>
            <PageHead title="Regions" />
            <RootLayout>
                {data.map((item: any) => (
                    <div key={item.region}>
                        <Typography.Title>{item.name.common}</Typography.Title>
                        <Typography.Text>{item.region}</Typography.Text>
                    </div>
                ))}
            </RootLayout>
        </>
    );
};

export default Regions;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;

    if (!id) {
        return {
            props: {},
            redirect: {
                destination: '/404',
                parmanent: false,
            },
        };
    }

    const RegionInfo = await countries.getRegions(id.toString());

    if (!RegionInfo) {
        return {
            props: {},
            redirect: {
                destination: '/404',
                parmanent: false,
            },
        };
    }

    return {
        props: {
            data: RegionInfo,
        },
    };
};
