import React, { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore(state => state.theme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      {children}
    </div>
  );
}

export default ThemeProvider;
