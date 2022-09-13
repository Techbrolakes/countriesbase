import { Avatar, Table, Typography } from 'antd';
import React from 'react';
import useGetCountries from 'hooks/useGetCountries';

const HomeSection = () => {
    const data = useGetCountries();

    return (
        <>
            <Table
                scroll={{ x: 'max-content' }}
                dataSource={data?.data}
                columns={[
                    {
                        dataIndex: 'name',
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
                        render: (_, record) => <Typography.Text>{record.population.toLocaleString()}</Typography.Text>,
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
