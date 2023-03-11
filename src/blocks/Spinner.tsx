import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner: React.FC = () => {
    return (
        <div className="min-h-[90vh] gap-3 flex flex-col justify-center items-center">
            <ScaleLoader color="#fff" />
            <h1 className="animate-bounce">Made By Lekan Dar</h1>
        </div>
    );
};

export default Spinner;
