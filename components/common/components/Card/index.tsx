import React from 'react';
import { Card as AntdCard, Image, Typography } from 'antd';

const Card = () => {
    return (
        <div>
            <AntdCard
                hoverable
                style={{ width: 250 }}
                cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <div>
                    <Typography.Title>Testing</Typography.Title>
                </div>
            </AntdCard>
        </div>
    );
};

export default Card;
