import constants from '@config/constants';
import useSWR from 'swr';
import countries from '@/services/countries';
import logger from '@logger';

const {
    API: { routes },
} = constants;

const useGetCountries = () => {
    const fetcher = async () => {
        const response = await countries.getAllCountries();

        if (!response) {
            const message = 'Error fetching countries';
            logger({ message });
        }
        return response;
    };

    const { data, error } = useSWR([routes.getAllCountries], fetcher);

    return { data, error };
};

export default useGetCountries;
