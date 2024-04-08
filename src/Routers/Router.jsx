import {
    createBrowserRouter,
} from "react-router-dom";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('luxury.json')
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/user",
                element: <UserProfile></UserProfile>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;
