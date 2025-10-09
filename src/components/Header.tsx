import { useState } from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <div
        className="absolute top-6 left-1/2 z-10 hidden w-full -translate-x-1/2 flex-row gap-3 rounded-4xl border border-white/20 bg-white/30 px-12 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl md:flex md:w-fit"
        style={{ viewTransitionName: 'nav' }}
      >
        <img src="/logo.png" className="h-12" />
        <ul className="ml-auto flex flex-row items-center gap-6 px-6">
          <NavItem label="Hem" path="/" />
          <NavItem label="Tävlingsvilkor" path="/tavling" />
        </ul>
      </div>
      <div
        className="visible absolute top-6 right-6 size-12 rounded-md border-white/20 bg-white/30 backdrop-blur-xl hover:cursor-pointer hover:bg-white/50 md:hidden"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <img src="/burger-menu.svg" className="h-full text-white" />
        <div
          className={`${isDropDownOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute top-full right-0 h-24 w-24 bg-red-50 transition-all duration-150`}
        >
          HEJ
        </div>
      </div>
      {isDropDownOpen && <p>HEJ</p>}
    </>
  );
};

const NavItem = ({ label, path }: { label: string; path: string }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`${path}`, { viewTransition: true })}
      className="font-regular h-fit text-lg hover:cursor-pointer"
    >
      {label}
    </li>
  );
};

export default Header;
