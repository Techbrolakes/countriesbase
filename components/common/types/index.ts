export type GetAllCountries = {
    flags: {
        png: string;
        svg: string;
    };
    name: {
        common: string;
        official: string;
    };
    currencies: {
        EUR: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    region: string;
    area: number;
    population: number;
    continents: string[]; //
};
