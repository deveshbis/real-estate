import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const NavBar = () => {

    const { user, logoutUser } = useAuth();

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-blue-950 rounded-2xl mb-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Dev s Real Estate</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <button
                            onClick={logoutUser}
                            className="text-red bg-blue-300 p-2 rounded-xl font-bold">Logout</button>
                            :
                            <Link to='/login'><button className="text-red bg-blue-300 p-2 rounded-xl font-bold">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;