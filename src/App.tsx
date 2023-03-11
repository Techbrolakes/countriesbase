import React from 'react';
import MainLayout from './layouts';
import { useThemeContext } from './context';
import useGetCountries from './hooks/useGetCountries';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Input from './blocks/Input';
import Card from './blocks/Card';

const App: React.FC = () => {
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
            <main className="min-h-screen py-6">
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

                <Card />

                <section className="space-y-3">
                    {data?.data.map(({ name, population, flags, region, capital }) => (
                        <div key={name.common}>
                            <img src={flags.svg} alt="" className="w-1/6 h-full" />
                            <h1>{name.common}</h1>
                            <p>{population}</p>
                            <p>{region}</p>
                            <ul>
                                {capital?.map((cap, index) => (
                                    <li key={index}>{cap}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </main>
        </MainLayout>
    );
};

export default App;
