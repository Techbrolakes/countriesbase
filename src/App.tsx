import React from 'react';
import MainLayout from './layouts';
import { useThemeContext } from './context';
import useGetCountries from './hooks/useGetCountries';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Input from './blocks/Input';

const App: React.FC = () => {
    const { darkMode } = useThemeContext();
    const { data } = useGetCountries('all');

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

                {data?.data.map(({ status, name }: { status: string; name: { common: string } }) => (
                    <div key={status}>
                        <h1>{name.common}</h1>
                    </div>
                ))}
            </main>
        </MainLayout>
    );
};

export default App;
