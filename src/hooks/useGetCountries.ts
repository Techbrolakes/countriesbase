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

const useGetCountries = (region?: string) => {
    const fetcher = async () => {
        const country = await axios.get<IGetCountriesDetails[]>(`https://restcountries.com/v3.1/all`);
        return country;
    };

    const regionFetcher = async () => {
        const regions = await axios.get<IGetCountriesDetails[]>(`https://restcountries.com/v3.1/region/${region}`);
        return regions;
    };

    const { data, isLoading, error } = useSWR(
        [region ? `https://restcountries.com/v3.1/region/${region}` : "'https://restcountries.com/v3.1/all'"],
        region ? regionFetcher : fetcher,
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useGetCountries;
