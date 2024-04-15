
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';
import HelmetTitle from '../components/HelmetTitle/HelmetTitle';
import { Navigate } from 'react-router-dom';


const UpdateProfile = () => {
    const { user, updateUserProfile, setReload, loading } = useAuth();
    const [name, setName] = useState(user?.displayName || '');
    const [imageUrl, setImageUrl] = useState(user?.photoURL || '');



    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(name, imageUrl)
            .then(() => {
                toast.success('Profile updated successfully!');
                setReload(true);
            })
            .catch(error => {
                console.error("Error updating profile: ", error);
                toast.error('Failed to update profile.');
            });
    };

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }


    return (

        <div className='mt-20'>
            <HelmetTitle title="Update Profile"></HelmetTitle>

            <div className="profile-update-form flex lg:flex-row md:flex-col flex-col justify-center items-center gap-32">
                <ToastContainer></ToastContainer>
                <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 " data-aos="fade-right"  data-aos-duration="3000">
                    <img src={user?.photoURL || "https://i.ibb.co/bvsgvC7/no-images.jpg"} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square " />

                    <div className='mt-3'>
                    
                        <h4 className="text-2xl font-semibold text-center">{user?.displayName || "No Name"}</h4>
                    </div>
                </div>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border bg-gray-50 dark:text-gray-800" data-aos="fade-left" data-aos-duration="3000">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl animate__fadeInTopRight">Update Profile</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block mb-2 text-sm">Name:</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Image URL:</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-teal-700 text-gray-50">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default UpdateProfile;







