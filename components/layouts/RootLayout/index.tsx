import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import Button from '@/common/components/Button';
import constants from './constants';
interface IProps {
    children: React.ReactNode;
}
const { REGIONS, SCREEN_TEXTS } = constants;

const RootLayout = ({ children }: IProps) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    const TogglePage = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) {
        return null;
    }

    const menu = <Menu items={REGIONS} />;
    return (
        <>
            <main className="w-full">
                <section className="theme-config dark:bg-d100 flex flex-col px-2 space-y-12">
                    <div className="flex justify-between items-center flex-col md:flex-row p-4 shadow-md dark:bg-d200 ">
                        <section>
                            <Typography.Title className="text-black dark:text-white">
                                {SCREEN_TEXTS.title}
                            </Typography.Title>
                        </section>
                        <section className="space-y-4 flex flex-row md:flex-col items-center justify-center">
                            <div>
                                {theme === 'dark' ? (
                                    <Button
                                        name="Light Mode"
                                        type="primary"
                                        onClick={TogglePage}
                                        className=" bg-blue-800 focus:bg-blue-700"
                                    />
                                ) : (
                                    <Button
                                        name="Dark Mode"
                                        type="primary"
                                        onClick={TogglePage}
                                        className=" bg-b100 focus:bg-b200"
                                    />
                                )}
                            </div>
                            <Dropdown overlay={menu}>
                                <Button
                                    name="Filter By Regions"
                                    type="primary"
                                    className=" bg-b100 focus:bg-b200 flex items-center"
                                    icon={<GlobalOutlined spin />}
                                />
                            </Dropdown>
                        </section>
                    </div>
                    <div className="min-h-screen">{children}</div>

                    <div className="text-center">
                        <Typography.Text className="text-black dark:text-white ">{SCREEN_TEXTS.footer}</Typography.Text>
                    </div>
                </section>
            </main>
        </>
    );
};

export default RootLayout;
