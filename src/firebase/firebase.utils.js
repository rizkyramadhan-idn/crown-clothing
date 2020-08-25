import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBXRpat1ho4A718FxTtVy3xRncAUEP1Vmg",
  authDomain: "db-crown-clothing.firebaseapp.com",
  databaseURL: "https://db-crown-clothing.firebaseio.com",
  projectId: "db-crown-clothing",
  storageBucket: "db-crown-clothing.appspot.com",
  messagingSenderId: "559980968751",
  appId: "1:559980968751:web:8c9deff08243ac917cffda",
  measurementId: "G-X9NGXQ806L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
