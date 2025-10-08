import { useNavigate } from 'react-router';

const Header = () => {
  return (
    <div
      className="absolute top-6 left-1/2 z-10 flex w-full -translate-x-1/2 flex-row gap-12 rounded-4xl border border-white/20 bg-white/30 px-12 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl md:w-fit"
      style={{ viewTransitionName: 'nav' }}
    >
      <img src="logo.png" className="h-12" />
      <ul className="ml-auto flex flex-row items-center gap-6 px-6">
        <NavItem label="Hem" path="/" />
        <NavItem label="Tävlingsvilkor" path="/tavling" />
      </ul>
    </div>
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
