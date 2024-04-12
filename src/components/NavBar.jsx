import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import 'animate.css';



const NavBar = () => {

    const { user, logoutUser } = useAuth();

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar rounded-2xl mb-3 text-white bg-green-700 gap-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl text-white animate__bounceInDown ">Dev s Real Estate</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1  ">
                        {
                            navLinks
                        }
                    </ul>
                </div> 
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"} />
                                </div>
                                
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user?.displayName || 'Unknown User'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logoutUser}
                                        className="btn btn-sm  btn-ghost">Logout</button>
                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'><button className="text-red bg-blue-300 p-2 rounded-xl font-bold">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;