import React from 'react';
import { Card as AntdCard, Image, Typography } from 'antd';

interface IProps {
    imgUrl: string;
    name: string;
    capital: string;
}

const Card = ({ imgUrl, name, capital }: IProps) => {
    return (
        <div>
            <AntdCard
                hoverable
                style={{ height: 300, width: 250 }}
                cover={<Image alt="example" src={imgUrl} preview={false} />}
            >
                <div>
                    <Typography.Title className="!text-xl">{name}</Typography.Title>
                    <Typography.Text>Capital City - {capital}</Typography.Text>
                </div>
            </AntdCard>
        </div>
    );
};

export default Card;
