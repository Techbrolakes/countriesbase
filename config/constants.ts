const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const API = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    routes: {
        getAllCountries: '/all?fields=name,currencies,capital,region,area,population,continents,flags',
    },
    timeout: 6000,
};

const constants = {
    API,
    ENVIRONMENT,
};

export default constants;
