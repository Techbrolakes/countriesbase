import React from 'react';
import PageHead from '@/common/components/pageHead';
import RootLayout from '@/layouts/RootLayout';
import { NextPage, GetServerSideProps } from 'next';
import countries from '@/services/countries';
import Card from '@/common/components/Card';

const Regions: NextPage = ({ data }: any) => {
    return (
        <>
            <PageHead title="Regions" />
            <RootLayout>
                <div className="flex flex-wrap justify-between items-center space-y-4">
                    {data.map((item: any) => (
                        <div key={item.region}>
                            <Card imgUrl={item.flags.svg} name={item.name.common} capital={item.capital} />
                        </div>
                    ))}
                </div>
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
