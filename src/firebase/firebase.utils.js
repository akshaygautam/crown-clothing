import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQtWWA_YtR-VG4y7qJeKGBU8Sh7bD5X0",
  authDomain: "crown-db-a0e18.firebaseapp.com",
  databaseURL: "https://crown-db-a0e18.firebaseio.com",
  projectId: "crown-db-a0e18",
  storageBucket: "crown-db-a0e18.appspot.com",
  messagingSenderId: "131627979395",
  appId: "1:131627979395:web:5c1af8e59433606f0b41b6",
  measurementId: "G-07Y73K5FYY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmail = () => auth.signInWithEmail();

export default firebase;
