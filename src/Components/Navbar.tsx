import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/5 bg-zinc-900 text-gray-400 fixed rounded-lg border-none mt-3 p-3 flex m-auto justify-between">
        <div className="flex align-middle items-center">
          <p className="text-2xl font-bold">ChartSV</p>
        </div>
        <div className="flex align-middle w-2/6 justify-between">
          <NavLink to="home">Home</NavLink>
          <NavLink to="demos">Demos</NavLink>
          <NavLink to="docs">Docs</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

const NavLink = (props: NavLinkProps) => {
  const { to, children } = props;
  return (
    <Link
      to={`/${to}`}
      className="text-gray-400 hover:text-white hover:bg-zinc-800 rounded-lg p-2"
    >
      {children}
    </Link>
  );
};
