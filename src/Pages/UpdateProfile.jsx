
import useAuth from '../Hooks/useAuth'; 

const UpdateProfile = () => {
    const { user } = useAuth(); 

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold underline">User Profile</h1>
            {user && (
                <div>
                    <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile" className="w-32 h-32 rounded-full mx-auto"/>
                    <h2 className="text-xl font-semibold">{user.displayName || 'No Name'}</h2>
                    <p>{user.email}</p>
                </div>
            )}
        </div>
    );
};

export default UpdateProfile;
