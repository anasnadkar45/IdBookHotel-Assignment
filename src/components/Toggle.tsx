import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeStore } from '../store/themeStore';

function Toggle() {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
      {theme === 'light'
        ? <FaMoon onClick={toggleTheme} className='icon' />
        : <FaSun onClick={toggleTheme} className='icon' />}
    </div>
  );
}

export default Toggle;
