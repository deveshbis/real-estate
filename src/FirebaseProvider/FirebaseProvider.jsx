import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    

    const [user, setUser] =useState(null);
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }, [])
 
    const allValue ={
        createUser,
        signInUser
    };

    return (
        <AuthContext.Provider value={allValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;