import React from 'react';
import MainLayout from '../layouts';
import { useParams, useNavigate } from 'react-router-dom';

const Details: React.FC = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="">
                <button onClick={() => navigate(-1)}>Go Back</button>
                {name} Details
            </div>
        </MainLayout>
    );
};

export default Details;
