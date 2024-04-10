import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import {FaGithub, FaGoogle} from 'react-icons/fa';


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result=>{
            if(result.user){
                navigate(from);
            }
        })
    }
    
    return (

        <div className='p-5 space-y-3 mb-5'>
            <h2 className="text-3xl">Login Us</h2>
            <button onClick={()=> handleSocialLogin(googleLogin)} className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button onClick={()=> handleSocialLogin(gitHubLogin)} className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>

    );
};

export default SocialLogin;