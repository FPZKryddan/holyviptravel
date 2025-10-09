import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';

const STORAGE_KEY = 'isDarkMode';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setTheme = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        setIsDarkMode(stored === 'true');
      }
    } catch (error: unknown) {
      console.error('Unknown error has occured: ', error);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem(STORAGE_KEY, String(isDarkMode));
    } catch (error: unknown) {
      console.error('Unknown error has occured: ', error);
    }
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return <div className="absolute top-6 left-6 size-10 bg-transparent" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      className="absolute top-6 left-6 z-50 size-12 rounded-full bg-linear-to-br from-white/10 to-white/30 p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] outline-1 outline-white/50 hover:cursor-pointer hover:from-white/20 hover:to-white/40 dark:from-black/10 dark:to-black/30 dark:outline-black/50 dark:hover:from-black/20 dark:hover:to-black/40"
      onClick={() => setTheme(!isDarkMode)}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <HiMoon className="size-full text-slate-800" />
      ) : (
        <HiSun className="size-full text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggler;
