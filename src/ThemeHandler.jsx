import { useEffect } from 'react';
import useThemeStore from './store/themeStore';

const ThemeHandler = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
};

export default ThemeHandler;
