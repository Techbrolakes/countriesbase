import React, { useEffect } from 'react';
import ThemeContext from '../context';
import { BsMoonStarsFill, BsFillCloudSunFill } from 'react-icons/bs';
import Spinner from '../blocks/Spinner';
import useGetCountries from '../hooks/useGetCountries';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true);
    const { isLoading } = useGetCountries();

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
                <div className={darkMode ? 'bg-primary text-white p-6' : 'bg-[FAFAFA] text-primary p-6'}>
                    <section className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">Where in the world?</h2>
                        <button onClick={toggleDarkMode} className="text-white">
                            {darkMode ? (
                                <span className="flex items-center text-white font-medium gap-2">
                                    <BsMoonStarsFill className="text-xl text-[#FEFCD7]" /> Dark mode
                                </span>
                            ) : (
                                <span className="flex items-center text-primary font-medium gap-2">
                                    <BsFillCloudSunFill className=" text-xl text-yellow-300" /> Light mode
                                </span>
                            )}
                        </button>
                    </section>
                </div>
                <main
                    className={
                        darkMode ? 'bg-secondary text-white p-2 lg:p-6' : 'bg-slate-200 text-secondary p-2 lg:p-6'
                    }
                >
                    {isLoading ? <Spinner /> : children}
                </main>
            </section>
        </ThemeContext.Provider>
    );
};

export default MainLayout;
