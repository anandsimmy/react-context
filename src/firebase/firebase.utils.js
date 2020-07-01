import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBY-84owDZBYNheFRHTv9epCpVC89UWOvE",
  authDomain: "crown-db-66a57.firebaseapp.com",
  databaseURL: "https://crown-db-66a57.firebaseio.com",
  projectId: "crown-db-66a57",
  storageBucket: "crown-db-66a57.appspot.com",
  messagingSenderId: "646898735149",
  appId: "1:646898735149:web:f5d7ade92dca402fe700a4",
  measurementId: "G-MJ7GHK0MH8"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
