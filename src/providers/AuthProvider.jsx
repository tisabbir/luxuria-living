import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;