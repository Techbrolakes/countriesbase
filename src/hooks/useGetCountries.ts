import axios from 'axios';
import useSWR from 'swr';

const useGetCountries = (filter: string) => {
    const fetcher = async () => {
        const country = await axios.get(`https://restcountries.com/v3.1/${filter}`);
        return country;
    };

    const { data, isLoading, error } = useSWR([`https://restcountries.com/v3.1/${filter}`], fetcher);

    return {
        data,
        isLoading,
        error,
    };
};

export default useGetCountries;
