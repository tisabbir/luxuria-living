import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const logOut = () => {
        return signOut(auth)
    }


    // loading json data
    const [estates, setEstates] = useState([]);

    useEffect(()=>{
        fetch('/estates.json')
        .then(res => res.json())
        .then(data => setEstates( data.luxury_estates))
        .catch(err => {
            console.log(err)
        })
    },[])



    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        loading,
        setLoading,
        logOut,
        estates
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;