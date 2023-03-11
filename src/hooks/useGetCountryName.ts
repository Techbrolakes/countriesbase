import axios from 'axios';
import useSWR from 'swr';

export interface IGetCountriesDetails {
    name: {
        common: string;
        official: string;
    };
    currencies: {
        data: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        data: string;
    };
    latlng: [35.0, 105.0];
    landlocked: false;
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    continents: ['Asia'];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
}
[];

const useGetCountryName = (name: string) => {
    const fethcer = async () => {
        const country = await axios.get<IGetCountriesDetails[]>(
            `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        );
        return country;
    };

    const { data, isLoading } = useSWR([`https://restcountries.com/v3.1/name/${name}?fullText=true`], fethcer);
    return { data, isLoading };
};

export default useGetCountryName;
