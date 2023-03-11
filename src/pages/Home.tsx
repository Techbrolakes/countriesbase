import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useThemeContext } from '../context';
import useGetCountries from '../hooks/useGetCountries';
import MainLayout from '../layouts';
import Input from '../blocks/Input';
import Card from '../blocks/Card';

const Home: React.FC = () => {
    const { darkMode } = useThemeContext();
    const { data } = useGetCountries();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span>Americas</span>,
        },
        {
            key: '2',
            label: <span>Africa</span>,
        },
    ];
    return (
        <MainLayout>
            <main className="py-6 space-y-12">
                <section className="flex justify-between items-center">
                    <Input />
                    <div>
                        <Dropdown
                            menu={{ items }}
                            className={`${darkMode ? 'bg-primary' : 'bg-primary'} shadow-sm rounded-md px-6 py-3`}
                        >
                            <h4>Filter By Regions</h4>
                        </Dropdown>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-6">
                    {data?.data.map(({ name, population, flags, region, capital }) => (
                        <div key={name.common}>
                            <Card
                                flag={flags.png}
                                name={name.common}
                                population={population}
                                region={region}
                                capital={capital?.map((cap) => cap)}
                            />
                        </div>
                    ))}
                </section>
            </main>
        </MainLayout>
    );
};

export default Home;
