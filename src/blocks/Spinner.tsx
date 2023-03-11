import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner: React.FC = () => {
    return (
        <div className="min-h-[90vh] flex justify-center items-center">
            <ScaleLoader color="#fff" />
        </div>
    );
};

export default Spinner;
