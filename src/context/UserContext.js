import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  //Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword:
  const signUpUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //When a user signs in to your app, pass the user's email address and password to signInWithEmailAndPassword:
  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //The recommended way to get the current user is by setting an observer on the Auth object:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);
  //Create an instance of the Google provider object:
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //To sign out a user, call signOut:
  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  //You can send a password reset email to a user with the sendPasswordResetEmail method. For example:
  const resetUser = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const userData = {
    loader,
    google,
    user,
    signUpUser,
    logInUser,
    signOutUser,
    resetUser,
  };

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
