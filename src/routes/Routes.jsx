import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Main/>,
        Children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;