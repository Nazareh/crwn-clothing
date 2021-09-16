import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8zWOkVdNkZwh3vN4yiq24w-7mD_b-yY0",
  authDomain: "crwn-db-bbb86.firebaseapp.com",
  projectId: "crwn-db-bbb86",
  storageBucket: "crwn-db-bbb86.appspot.com",
  messagingSenderId: "911526392529",
  appId: "1:911526392529:web:77fce624d0a0e987bb4bf0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalData,
      });
 
    } catch (e) {
      console.log(`error creating user`, e.message());
    }
  }
  return userRef;
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
