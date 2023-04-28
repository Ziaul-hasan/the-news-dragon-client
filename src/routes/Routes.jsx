import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        Children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    }
])

export default router;