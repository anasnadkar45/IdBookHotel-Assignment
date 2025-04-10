import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        set({ theme: newTheme });
      },
      setTheme: (theme: Theme) => set({ theme })
    }),
    {
      name: 'theme-storage', // localStorage key
    }
  )
)
