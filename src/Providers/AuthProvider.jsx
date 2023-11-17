import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
export const AuthContext=createContext(null)
const auth=getAuth(app);

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const provider = new GoogleAuthProvider();
const axiosPublic=UseAxiosPublic();

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}

const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

const updateUserProfile=(name,photo)=>{
   return updateProfile(auth.currentUser,{
        displayName:name ,photoURL:photo
    })
}



useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        if(currentUser){
            // assign get token and store token
            const userInfo={email:currentUser.email}
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }

            })


        }else{
            // remove token(if token stored in the client side)
            localStorage.removeItem('access-token')
        }
        setLoading(false)
        
    })
    return ()=>{
        return unsubscribe();
    }
},[])

   const authInfo={
user,loading,createUser,signIn,logOut,updateUserProfile,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;