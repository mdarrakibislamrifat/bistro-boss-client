import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/adminHome/AdminHome";
import Contact from "../Pages/DashBoard/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserPayment from "../Pages/DashBoard/UserPayment/UserPayment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/ourShop/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'userPayment',
          element:<UserPayment></UserPayment>
        },
        {
          path:'contact',
        element:<Contact></Contact>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin routes
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        
      ]
    }
    
  ]);