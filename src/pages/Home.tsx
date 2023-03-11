import React, { useState } from 'react';
import { Dropdown, Input } from 'antd';
import type { MenuProps } from 'antd';
import { useThemeContext } from '../context';
import useGetCountries from '../hooks/useGetCountries';
import MainLayout from '../layouts';
import Card from '../blocks/Card';
import { ScaleLoader } from 'react-spinners';
import { FcSearch } from 'react-icons/fc';
import { BsArrowDownShort } from 'react-icons/bs';
import Spinner from '../blocks/Spinner';

const Home: React.FC = () => {
    const { darkMode } = useThemeContext();
    const [loading, setLoading] = React.useState(false);
    const [region, setRegion] = React.useState<'Americas' | 'Africa' | 'Asia' | 'Europe' | 'Oceania' | ''>();
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading } = useGetCountries(region);
    const countryPerRow = 12;
    const [next, setNext] = React.useState(countryPerRow);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCountry = data?.data.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setNext(next + countryPerRow);
            setLoading(false);
        }, 3000);
    };

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span>All Regions</span>,
            onClick: () => setRegion(''),
        },
        {
            key: '2',
            label: <span>Americas</span>,
            onClick: () => setRegion('Americas'),
        },
        {
            key: '3',
            label: <span>Africa</span>,
            onClick: () => setRegion('Africa'),
        },
        {
            key: '4',
            label: <span>Asia</span>,
            onClick: () => setRegion('Asia'),
        },
        {
            key: '6',
            label: <span>Europe</span>,
            onClick: () => setRegion('Europe'),
        },
        {
            key: '7',
            label: <span>Oceania</span>,
            onClick: () => setRegion('Oceania'),
        },
    ];

    return (
        <MainLayout>
            <main className="py-6 space-y-12 min-h-screen">
                <section className="block space-y-4 lg:flex justify-between items-center">
                    <div
                        className={`flex gap-2 px-6 py-3 items-center ${
                            darkMode ? 'bg-primary' : 'bg-white'
                        } rounded-md shadow-sm`}
                    >
                        <span>
                            <FcSearch size={'20px'} />
                        </span>
                        <Input
                            className={`${darkMode ? 'bg-primary' : 'bg-white'} outline-none  `}
                            placeholder="Search for a country..."
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>

                    <div>
                        <Dropdown
                            menu={{ items }}
                            className={`${darkMode ? 'bg-primary' : 'bg-primary'} shadow-sm rounded-md px-6 py-3`}
                        >
                            <h4 className="flex gap-2 items-center">
                                <span> Filter By Regions</span> <BsArrowDownShort size={'22px'} />
                            </h4>
                        </Dropdown>
                    </div>
                </section>

                {!data ? (
                    <section className="flex justify-center items-center">
                        <ScaleLoader color="#fff" className="text-4xl" />
                    </section>
                ) : (
                    <div>
                        {region && (
                            <h1 className="text-left text-3xl">
                                {region} - {data?.data.length} Countries
                            </h1>
                        )}
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-6">
                            {filteredCountry?.slice(0, next).map(({ name, population, flags, region, capital }) => (
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
                    </div>
                )}
            </main>
            <div className="flex justify-center">{loading && <ScaleLoader color="#fff" className="text-4xl" />}</div>
            {next < (filteredCountry?.length || 0) && (
                <div className="flex justify-center">
                    <button className="shadow-2xl p-4" onClick={handleLoadMore}>
                        Load More Countries
                    </button>
                </div>
            )}
        </MainLayout>
    );
};

export default Home;
