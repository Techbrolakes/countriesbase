import React, { useEffect } from 'react';
import ThemeContext from '../context';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <section className="">
                <div className={darkMode ? 'bg-primary text-white p-6' : 'bg-slate-100 text-primary p-6'}>
                    <section className="flex justify-between items-center">
                        <h2>Where in the world?</h2>
                        <button onClick={toggleDarkMode} className="bg-red-500 text-white p-2 rounded-md">
                            {darkMode ? 'Light mode' : 'Dark mode'}
                        </button>
                    </section>
                </div>
                <main className={darkMode ? 'bg-secondary text-white p-6' : 'bg-slate-200 text-secondary p-6'}>
                    {children}
                </main>
            </section>
        </ThemeContext.Provider>
    );
};

export default MainLayout;
