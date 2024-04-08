import { Outlet  } from "react-router-dom";
import NavBar from "../components/NavBar";

const Roots = () => {
    return (
        <div className="lg:px-32 md:px-12 px-5">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;