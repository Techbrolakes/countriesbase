import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Popconfirm, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
interface IProps {
    children: React.ReactNode;
}
const RootLayout = ({ children }: IProps) => {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
        });
    }, []);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    const darkTheme = () => {
        setTheme('dark');
    };
    const whiteTheme = () => {
        setTheme('white');
    };
    if (!mounted) {
        return null;
    }
    return (
        <>
            <section className="bg-l100 dark:bg-d100">
                <Typography.Title>Countries Finder</Typography.Title>
                <Typography.Paragraph className="!font-Secondary">By Lekan Dar</Typography.Paragraph>
                <div className="min-h-screen">{children}</div>
                <Popconfirm
                    title="Set Color Mode"
                    onConfirm={whiteTheme}
                    onCancel={darkTheme}
                    okText="Yes"
                    cancelText="No"
                >
                    {visible ? <SettingOutlined spin style={{ fontSize: '32px', color: 'white' }} /> : null}
                </Popconfirm>
                <div>Created with ❤️ By Lekan Dar</div>
            </section>
        </>
    );
};

export default RootLayout;
