import axios from 'axios';
import constants from '../constants';

const {
    API: { baseURL, timeout },
} = constants;

const restCountry = axios.create({
    baseURL,
    timeout,
});

export default restCountry;
