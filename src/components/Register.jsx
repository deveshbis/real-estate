
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import HelmetTitle from "./HelmetTitle/HelmetTitle";

const Register = () => {

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const from = '/';


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;
        createUser(email, password)
            .then(() => {
                toast.success("Registration successful!");
                

                updateUserProfile(fullName, image)
                    .then(() => {
                        toast.success("Registration successful!");
                        navigate(from, { replace: true });
                    })
            }).catch(error => {
                toast.error(`Failed to register: ${error.message}`);
            });
    };


    const passwordValidation = {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must have at least 6 characters"
        },
        validate: {
            uppercase: v => /[A-Z]/.test(v) || "Password must include an uppercase letter",
            lowercase: v => /[a-z]/.test(v) || "Password must include a lowercase letter",
        }
    };


    return (
        <div>
            <HelmetTitle title="Register"></HelmetTitle>
            
            <ToastContainer />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" {...register("image", { required: true })} />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered"
                                    {...register("password", passwordValidation)}

                                />
                                <span onClick={togglePasswordVisibility} className="absolute bottom-14 right-1 pr-1 text-lg cursor-pointer">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>


                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                <label >

                                    <Link to='/login' className="flex justify-between items-center"> Have an Account? <span className="label hover:underline">Login Now</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
