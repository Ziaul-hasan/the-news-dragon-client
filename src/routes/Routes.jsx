import { Navigate, createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Category/Category";
import Newslayout from "../Layout/Newslayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path : 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-ziaul-hasan.vercel.app/categories/${params.id}`)
            }  
        ]
    },
    {
        path: '/news',
        element: <Newslayout></Newslayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-ziaul-hasan.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;