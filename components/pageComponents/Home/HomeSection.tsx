import { Avatar, Table, Typography } from 'antd';
import React from 'react';
import useGetCountries from 'hooks/useGetCountries';
import logger from '@logger';

const HomeSection = () => {
    const data = useGetCountries();

    logger(data.data);
    return (
        <>
            <Table
                className="dark:bg-d100"
                dataSource={data?.data}
                columns={[
                    {
                        render: (text, record, index) => index + 1,
                        title: 'S/N',
                    },
                    {
                        render: (_, record) => <Typography.Text>{record.name.common}</Typography.Text>,
                        title: 'Countries',
                    },
                    {
                        dataIndex: 'capital',
                        title: 'Capital',
                    },
                    {
                        dataIndex: 'region',
                        title: 'Region',
                    },
                    {
                        render: (_, record) => <Typography.Text>{record.population}</Typography.Text>,
                        title: 'Population',
                    },
                    {
                        dataIndex: 'continents',
                        title: 'Continent',
                    },
                    {
                        render: (_, record) => <Avatar src={record.flags.png} shape="circle" size="large" />,
                        title: 'Flags',
                    },
                ]}
            />
        </>
    );
};

export default HomeSection;
