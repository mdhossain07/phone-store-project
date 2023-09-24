import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-lg mb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold"> Phone Shop </h2>
        <nav className="flex justify-around items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-green-500 underline " : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-green-500 underline" : ""
            }
          >
            Favourites
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-green-500 underline" : ""
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
