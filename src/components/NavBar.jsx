
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import 'animate.css';

const NavBar = () => {
    const { user, logoutUser } = useAuth();

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/agent'>Agent</NavLink></li>
            <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
            <li><NavLink to='/user'>User Profile</NavLink></li>
        </>
    );

    return (
        <div className="navbar rounded-2xl mt-2 mb-3 text-white bg-green-700 gap-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-black rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost lg:text-2xl md:texxl text-xs text-white animate__bounceInDown">Dev s Real Estate</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
                                <img src={user?.photoURL || "https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"} className="w-10 rounded-full" alt="User Avatar"/>
                                {user && (
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max bg-green-500 text-white p-1 rounded-md opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100">
                                        {user.displayName || 'Unknown User'}
                                    </div>
                                )}
                            </label>
                        </div>
                        <button onClick={logoutUser} className="btn btn-sm btn-ghost hover:bg-black">Logout</button>
                    </div>
                ) : (
                    <Link to='/login'><button className="text-white bg-black p-2 rounded-xl font-bold">Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;








































