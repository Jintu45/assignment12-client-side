import { cloneElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllSeller from "../../Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Myproduct from "../../Dashboard/MyProduct/Myproduct";
import Error from "../../Error/Error";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AdvertiseProduct from "../../Pages/Home/AdvertiseProduct/AdvertiseProduct";
import Category from "../../Pages/Home/Category/Category";
import Products from "../../Pages/Home/Category/Products/Products";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/login/Login";
import Register from "../../Pages/login/Register";
import MyDetails from "../../Pages/Mydetails/MyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'*',
        element: <Error></Error>,
        errorElement:<Error></Error>
      },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path: '/category',
                element: <Category></Category>,
            },
            {
                    path:'/categories/:id',
                    element:<PrivateRoute><Products></Products></PrivateRoute>,
                   loader:({params})=> fetch(`https://assignment12-server-two.vercel.app/categories/${params.id}`)
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/mydetails',
                element: <MyDetails></MyDetails>
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/myproduct',
                element: <Myproduct></Myproduct>
            },
            {
                path:'/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            }

        ]
    }
])

export default router;