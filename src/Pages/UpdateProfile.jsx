
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const [name, setName] = useState(user?.displayName || '');
    const [imageUrl, setImageUrl] = useState(user?.photoURL || '');

    

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(name, imageUrl)
            .then(() => {
                toast.success('Profile updated successfully!');
            })
            .catch(error => {
                console.error("Error updating profile: ", error);
                toast.error('Failed to update profile.');
            });
    };


    return (
        <div className="profile-update-form flex justify-center items-center">
            <ToastContainer></ToastContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            <div className="flex flex-col justify-center items-center mx-auto max-w-[400px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src={user?.photoURL || "https://source.unsplash.com/150x150/?portrait?3"} alt="" className="w-60 h-60 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName || "No Name"}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UpdateProfile;







