import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }


    const logoutUser = () => {
        setLoading(true);
        setUser(null);
        signOut(auth);
        setReload(prevState => !prevState);

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else{
                setLoading(false); 
            }
        });
        return () => unSubscribe();
    }, [reload])

    const allValue = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logoutUser,
        updateUserProfile,
        setReload
    };

    return (
        <AuthContext.Provider value={allValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FirebaseProvider;