import { Table } from 'antd';
import React from 'react';
import useGetCountries from 'hooks/useGetCountries';
import logger from '@logger';

const HomeSection = () => {
    const data = useGetCountries();

    logger(data.data);
    return (
        <>
            <Table
                dataSource={data?.data}
                columns={[
                    {
                        dataIndex: 'name',
                        title: 'Name',
                    },
                    {
                        dataIndex: 'region',
                        title: 'Region',
                    },
                ]}
            />
        </>
    );
};

export default HomeSection;
