import React from 'react';
import { useThemeContext } from '../context';
import { useNavigate } from 'react-router-dom';
import millify from 'millify';

interface IProps {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string[];
}
const Card: React.FC<IProps> = ({ flag, name, population, region, capital }) => {
    const { darkMode } = useThemeContext();
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/details/${name}`)}
            className={`${
                darkMode ? 'bg-primary' : 'bg-white'
            } antialiased leading-relaxed tracking-wide shadow-lg rounded-md w-full h-[390px] space-y-4 cursor-pointer `}
        >
            <img src={flag} alt="flag-image" className="w-full h-[180px]" />
            <section className="px-3 space-y-4 font-medium">
                <h1 className="text-2xl capitalize ">{name}</h1>
                <p>Population : {millify(population, { precision: 2 })}</p>
                <p>Region: {region}</p>
                <ul>
                    <li className="tracking-wider">Capital City : {capital ? capital : 'No Capital Yet'}</li>
                </ul>
            </section>
        </div>
    );
};

export default Card;
