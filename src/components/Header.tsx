import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <NavBar />
      {mounted && createPortal(<BurgerMenu />, document.body)}
    </>
  );
};

const BurgerMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      {isDropDownOpen && <Backdrop onClick={() => setIsDropDownOpen(false)} />}
      <div
        className="visible absolute top-6 right-6 z-10 size-12 rounded-md border-white/20 bg-white/30 p-1 backdrop-blur-xl hover:cursor-pointer hover:bg-white/50 md:hidden"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <img src="/burger-menu.svg" className="h-full text-white" />
        <DropDownMenu isOpen={isDropDownOpen} />
      </div>
    </>
  );
};

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  return <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" onClick={onClick}></div>;
};

const DropDownMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <div
        className={`${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} absolute top-[110%] right-0 rounded-md bg-white/30 text-black backdrop-blur-3xl transition-all duration-100 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col items-center p-4">
          <DropDownNavItem label="Home" path="/" />
          <DropDownNavItem label="Tävlingsvilkor" path="/tavling" />
        </ul>
      </div>
    </>
  );
};

const DropDownNavItem = ({ label, path }: { label: string; path: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <li
      onClick={() => navigate(`${path}`, { viewTransition: true })}
      className={`font-regular h-[44px] rounded-2xl px-6 text-lg leading-[44px] hover:cursor-pointer ${pathname === path ? 'bg-white/30' : ''}`}
    >
      {label}
    </li>
  );
};

const NavBar = () => {
  return (
    <div
      className="absolute top-6 left-1/2 z-10 hidden w-full -translate-x-1/2 flex-row gap-3 rounded-4xl border border-white/20 bg-white/30 px-12 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl md:flex md:w-fit"
      style={{ viewTransitionName: 'nav' }}
    >
      <img src="/logo.png" className="h-12" />
      <ul className="ml-auto flex flex-row items-center gap-2 px-6">
        <NavItem label="Hem" path="/" />
        <NavItem label="Tävlingsvilkor" path="/tavling" />
      </ul>
    </div>
  );
};

const NavItem = ({ label, path }: { label: string; path: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <li
      onClick={() => navigate(`${path}`, { viewTransition: true })}
      className={`font-regular h-[34px] rounded-2xl px-4 text-lg leading-[34px] transition-all duration-100 hover:cursor-pointer ${pathname === path ? 'bg-white/30' : ''}`}
    >
      {label}
    </li>
  );
};

export default Header;
