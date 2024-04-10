import useAuth from "../Hooks/useAuth";
import {FaGithub, FaGoogle} from 'react-icons/fa';


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    return (

        <div className='p-5 space-y-3 mb-5'>
            <h2 className="text-3xl">Login Us</h2>
            <button onClick={()=> googleLogin()} className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>

    );
};

export default SocialLogin;