import { FcSearch } from 'react-icons/fc';
import { useThemeContext } from '../context';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
    value?: string;
}
const Input: React.FC<IProps> = ({ value }) => {
    const { darkMode } = useThemeContext();
    return (
        <div
            className={`flex gap-2 px-6 py-3 items-center ${darkMode ? 'bg-primary' : 'bg-white'} rounded-md shadow-sm`}
        >
            <span>
                <FcSearch size={'20px'} />
            </span>
            <input
                className={`${darkMode ? 'bg-primary' : 'bg-white'} outline-none  `}
                placeholder="Search for a country..."
                type="text"
                value={value}
            />
        </div>
    );
};

export default Input;
