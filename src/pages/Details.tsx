import React from 'react';
import MainLayout from '../layouts';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useGetCountryName from '../hooks/useGetCountryName';
import Spinner from '../blocks/Spinner';

const Details: React.FC = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetCountryName(name || '');

    return (
        <MainLayout>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="min-h-screen space-y-12">
                    <button
                        className="shadow-2xl py-2 px-4 bg-primary rounded-md flex gap-2"
                        onClick={() => navigate(-1)}
                    >
                        <AiOutlineArrowLeft size={'20px'} />
                        <span>Go Back</span>
                    </button>

                    {data?.data.map(
                        ({
                            flags,
                            name,
                            capital,
                            population,
                            borders,
                            subregion,
                            region,
                            area,
                            timezones,
                            currencies,
                            languages,
                        }) => (
                            <div>
                                <section className="block space-y-12 lg:space-y-0 lg:flex gap-10">
                                    <main key={flags.png}>
                                        <img
                                            src={flags.png}
                                            alt={flags.alt}
                                            className="w-fit lg:w-[700px] h-fit lg:h-[450px]"
                                        />
                                    </main>
                                    <main className="space-y-6 font-medium text-sm md:text-base lg:text-lg">
                                        <h1 className="text-6xl font-bold">{name.common}</h1>
                                        <h3>Official Name: {name.official}</h3>
                                        {capital && <h3>Capital: {capital?.map((cap) => cap)}</h3>}
                                        {currencies && (
                                            <h3 className="flex gap-3 items-center">
                                                Currencies:
                                                {Object.values(currencies)?.map((curr) => (
                                                    <p className="space-x-4">{curr.name}</p>
                                                ))}
                                            </h3>
                                        )}
                                        {languages && (
                                            <h3 className="flex gap-3 items-center">
                                                Languages:{' '}
                                                {Object.values(languages)?.map((lang) => (
                                                    <p className="space-x-4">{lang}</p>
                                                ))}
                                            </h3>
                                        )}
                                        <h3>Population: {population.toLocaleString()}</h3>
                                        {borders && (
                                            <h3 className="flex-wrap flex gap-3 items-center">
                                                Borders:
                                                {borders.map((bor) => (
                                                    <p className="space-x-4">{bor}</p>
                                                ))}
                                            </h3>
                                        )}

                                        <h3>Region: {region}</h3>
                                        <h3>Subregion: {subregion}</h3>
                                        <h3>Area: {area.toLocaleString()}</h3>

                                        {timezones && (
                                            <h3 className="flex gap-3 items-center flex-wrap">
                                                Timezones:
                                                {timezones.map((timezone) => (
                                                    <p className="space-x-4">{timezone}</p>
                                                ))}
                                            </h3>
                                        )}
                                    </main>
                                </section>
                            </div>
                        ),
                    )}
                </div>
            )}
        </MainLayout>
    );
};

export default Details;
