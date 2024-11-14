import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { signInWithPopup } from "firebase/auth";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)


  
  const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
      setLoading(true)
    }

    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
      setLoading(true)
  }
  
  const signInWithGoogle = () => {
    return signInWithPopup (auth,googleProvider)
  }
    const signOutUser = () => {
      return signOut(auth);
      setLoading(true)
    };

    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current User', currentUser);
       setUser(currentUser)
       setLoading(false)
     })
        return () => {
            unSubscribe();
        }
},[])


    
    const authInfo = {
      
      user,
      loading,
      createUser,
      signInWithGoogle,
      signInUser,
      signOutUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;