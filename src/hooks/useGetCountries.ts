import axios from 'axios';
import useSWR from 'swr';

interface IGetCountriesDetails {
    name: {
        common: string;
        official: 'Territory of the Wallis and Futuna Islands';
    };
    capital: string[];
    region: string;
    subregion: 'Polynesia';
    languages: {
        fra: 'French';
    };
    population: number;
    car: {
        signs: ['F'];
        side: 'right';
    };
    timezones: ['UTC+12:00'];
    continents: ['Oceania'];
    flags: {
        png: string;
        svg: string;
    };
}

const useGetCountries = () => {
    const fetcher = async () => {
        const country = await axios.get<IGetCountriesDetails[]>(`https://restcountries.com/v3.1/all`);
        return country;
    };

    const { data, isLoading, error } = useSWR(['https://restcountries.com/v3.1/all'], fetcher);

    return {
        data,
        isLoading,
        error,
    };
};

export default useGetCountries;
