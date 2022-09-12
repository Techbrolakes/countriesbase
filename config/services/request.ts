import restCountry from './restCountry';
import logger from '@logger';

const get = async <T>({ route }: { route: string }): Promise<T> => {
    try {
        const response = await restCountry.get(route);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const request = {
    get,
};

export default request;
