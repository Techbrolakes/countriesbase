import React from 'react';
import { useThemeContext } from '../context';

const Card: React.FC = () => {
    const { darkMode } = useThemeContext();
    return <div className={`${darkMode ? 'bg-primary' : 'bg-white'} shadow-md rounded-md w-full lg:w-1/6`}>Card</div>;
};

export default Card;
