// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr6DQYjR2z6DB9MQo6C3axwh-4kW_vzUs",
  authDomain: "crwn-clothing-db-mrdbstig.firebaseapp.com",
  projectId: "crwn-clothing-db-mrdbstig",
  storageBucket: "crwn-clothing-db-mrdbstig.appspot.com",
  messagingSenderId: "706709121206",
  appId: "1:706709121206:web:b89dc5613313e4894c1e17",
  measurementId: "G-SSJMGDZ0TX",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
