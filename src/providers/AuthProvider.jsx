import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // setting the observer
    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('from onAuthStateChanged',currentUser)
              setUser(currentUser);
            } else {
              setUser(null);
            }
          });

          return ()=>{
            unsubscribe();
          }
    },[])
    // setting the observer

    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    };

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }
    const logInWithGithub = () => {
        return signInWithPopup(auth,githubProvider);
    }



    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;