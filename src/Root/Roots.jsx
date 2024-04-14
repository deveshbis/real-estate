import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Roots = () => {
    return (
        <div className=" font-poppins">
            <NavBar></NavBar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;