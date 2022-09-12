import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';

const Button = (props: ButtonProps): JSX.Element => {
    const { name } = props;
    return <AntdButton {...props}>{name}</AntdButton>;
};

export default Button;
