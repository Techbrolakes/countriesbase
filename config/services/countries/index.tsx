import request from '../request';
import constants from '@config/constants';
import { GetAllCountries } from '@/common/types';

const {
    API: { routes },
} = constants;

export interface GetAllCountriesPromise {
    data: GetAllCountries[];
}
const getAllCountries = (): Promise<any> => {
    return request.get({ route: routes.getAllCountries });
};

const getRegions = (id: string): Promise<any> => {
    return request.get({ route: routes.getRegion.replace('%region%', id) });
};
const countries = {
    getAllCountries,
    getRegions,
};

export default countries;
