import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 h-20 bg-black">
      <div className="cursor-pointer">
        <span>
          <NavLink to="/">Walpaper Paradise</NavLink>
        </span>
      </div>
      <div className="space-x-6">
        <NavLink to="/collections"> Collections </NavLink>
        <NavLink to='/videos'>Videos</NavLink>
      </div>
      <div className="px-8">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
