import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart();
  
  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/secret"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Secret
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourShop/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-4"></FaShoppingCart>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar  fixed max-w-screen-xl mx-auto bg-opacity-30 z-10 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navbar-end"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="bold text-2xl">Bistro Boss</span>
            <br /> R E S T A U R A N T
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
