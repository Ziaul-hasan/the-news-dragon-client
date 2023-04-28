import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Category/Category";
import Newslayout from "../Layout/Newslayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }  
        ]
    },
    {
        path: '/news',
        element: <Newslayout></Newslayout>,
        children: [
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])

export default router;