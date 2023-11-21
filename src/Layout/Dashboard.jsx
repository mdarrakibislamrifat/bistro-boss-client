import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPaypal,
  FaSearch,
  FaShoppingCart,
  FaUser,
  
  FaVoicemail,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] =useAdmin()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaBook></FaBook> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>

              

              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>

              

              

              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart></FaShoppingCart>MyCart ; {cart.length}
                </NavLink>
              </li>

              

              <li>
              <NavLink to="/dashboard/paymentHistory">
                  <FaPaypal></FaPaypal> Real Payments History
                </NavLink>
              </li>
              <li>
            <NavLink to="/dashboard/contact">
              <FaVoicemail></FaVoicemail> Contact
            </NavLink>
          </li>
            </>
          )}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome>Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/ourShop/salad">
              {" "}
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>

          
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
