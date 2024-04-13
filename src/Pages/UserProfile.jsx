import { FaEnvelope, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";


const UserProfile = () => {

    const { user } = useAuth();

    if (!user) {
        return <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    }

    return (
        <div>
            <HelmetTitle title="User Profile"></HelmetTitle>
            <div className="flex flex-col justify-center items-center mx-auto max-w-[400px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src={user.photoURL || "https://i.ibb.co/bvsgvC7/no-images.jpg"} alt="" className="w-60 h-60 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName || "No Name"}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600">{user?.email || "No email provided"}</p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600">Front-end developer</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaGithub></FaGithub>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;