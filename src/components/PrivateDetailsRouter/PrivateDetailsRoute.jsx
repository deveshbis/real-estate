import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateDetailsRoute = ({ children }) => {

    const{user, loading} = useAuth();
    const location = useLocation();


    if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to ='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivateDetailsRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateDetailsRoute;