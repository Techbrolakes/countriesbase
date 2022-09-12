import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Button from '@/common/components/Button';
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

    const TogglePage = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) {
        return null;
    }
    return (
        <>
            <main className="w-full">
                <section className="theme-config dark:bg-d100 flex flex-col container">
                    <div className="flex justify-between items-center py-4">
                        <section className="!text-ld100 !dark:text-l100">
                            <Typography.Title>Countries Finder</Typography.Title>
                            <Typography.Paragraph className="!font-Secondary">By Lekan Dar</Typography.Paragraph>
                        </section>
                        <section>
                            {theme === 'dark' ? (
                                <Button
                                    name="Dark Mode"
                                    type="primary"
                                    onClick={TogglePage}
                                    className=" bg-blue-800 focus:bg-blue-700"
                                />
                            ) : (
                                <Button
                                    name="Light Mode"
                                    type="primary"
                                    onClick={TogglePage}
                                    className=" bg-b100 focus:bg-b200"
                                />
                            )}
                        </section>
                    </div>
                    <div className="min-h-screen">{children}</div>

                    <div>Created with ❤️ By Lekan Dar</div>
                </section>
            </main>
        </>
    );
};

export default RootLayout;
