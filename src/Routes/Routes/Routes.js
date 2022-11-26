import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Home/Category/Category";
import Products from "../../Pages/Home/Category/Products/Products";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/login/Login";
import Register from "../../Pages/login/Register";
import MyDetails from "../../Pages/Mydetails/MyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
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
                   loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
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
    }
])

export default router;