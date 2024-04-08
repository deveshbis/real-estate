import {
    createBrowserRouter,
} from "react-router-dom";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import Properties from "../Pages/Properties";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/properties",
                element: <Properties></Properties>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>,
            },
        ]
    },
]);

export default router;
