// Header.tsx
import { Link, useLocation, useNavigate } from 'react-router';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Header = () => {
  return (
    <>
      <div className="fixed top-6 left-0 z-50 w-full px-6">
        <div className="relative h-16 md:h-20">
          <div className="fixed top-6 left-6 md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:transform">
            <ThemeToggler />
          </div>

          <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <NavBar />
          </div>

          <div className="md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2">
            <BurgerMenu />
          </div>
        </div>
      </div>

      <div className="h-28 md:h-24" />
    </>
  );
};

const BurgerMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDropDownOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');
    return () => root.classList.remove('overflow-hidden');
  }, [isDropDownOpen, mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      {isDropDownOpen && <Backdrop onClick={() => setIsDropDownOpen(false)} />}

      <img
        src="/logo.png"
        alt="Logo"
        onClick={() => navigate('/', { viewTransition: true })}
        className={`fixed top-6 left-1/2 z-[55] h-20 -translate-x-1/2 transform transition-all duration-100 md:hidden ${
          isDropDownOpen ? 'opacity-30' : 'opacity-100'
        }`}
      />

      <button
        className="fixed top-6 right-6 z-[60] size-12 rounded-md bg-white/30 p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] outline-1 outline-white/50 backdrop-blur-xl hover:bg-white/50 md:hidden dark:bg-black/30 dark:outline-black/50 dark:hover:bg-black/50"
        onClick={() => setIsDropDownOpen((v) => !v)}
        aria-label="Open menu"
        aria-expanded={isDropDownOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <svg viewBox="0 0 24 24" className="size-10 text-slate-700 dark:text-slate-200">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <DropDownMenu isOpen={isDropDownOpen} />
    </>,
    document.body,
  );
};

const Backdrop = ({ onClick }: { onClick: () => void }) => (
  <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]" onClick={onClick} />
);

const DropDownMenu = ({ isOpen }: { isOpen: boolean }) => (
  <div
    id="mobile-menu"
    className={`${
      isOpen
        ? 'pointer-events-auto translate-y-0 opacity-100'
        : 'pointer-events-none -translate-y-2 opacity-0'
    } fixed top-24 right-4 z-[61] rounded-md bg-white/30 text-black backdrop-blur-3xl transition-all duration-150 ease-out md:hidden dark:bg-black/30`}
    onClick={(e) => e.stopPropagation()}
  >
    <ul className="flex flex-col items-center p-4">
      <DropDownNavItem label="Home" path="/" />
      <DropDownNavItem label="Tävlingsvilkor" path="/tavling" />
    </ul>
  </div>
);

const DropDownNavItem = ({ label, path }: { label: string; path: string }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      type="button"
      viewTransition
      className={`font-regular h-[44px] rounded-2xl px-6 text-lg leading-[44px] text-black hover:cursor-pointer dark:text-white ${
        pathname === path
          ? 'bg-linear-to-br from-white/20 to-white/50 dark:from-black/20 dark:to-black/50'
          : ''
      }`}
    >
      {label}
    </Link>
  );
};

const NavBar = () => (
  <div
    className="pointer-events-auto relative z-[62] hidden w-fit flex-row gap-3 rounded-4xl border border-white/20 bg-white/30 px-12 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl md:flex dark:border-black/20 dark:bg-black/30"
    style={{ viewTransitionName: 'nav' }}
  >
    <img src="/logo.png" className="h-12" alt="Logo" />
    <ul className="ml-auto flex flex-row items-center gap-2 px-6">
      <NavItem label="Hem" path="/" />
      <NavItem label="Tävlingsvilkor" path="/tavling" />
    </ul>
  </div>
);

const NavItem = ({ label, path }: { label: string; path: string }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      type="button"
      viewTransition
      className={`font-regular h-[34px] rounded-2xl px-4 text-lg leading-[34px] text-black transition-all duration-100 hover:bg-linear-to-br hover:from-white/10 hover:to-white/20 dark:text-white dark:hover:from-black/10 dark:hover:to-black/20 ${
        pathname === path
          ? 'bg-linear-to-br from-white/20 to-white/50 dark:from-black/20 dark:to-black/50'
          : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;
