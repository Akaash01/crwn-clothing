import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAG03a8fkuXiWE5wO9xhCE2igDAT4BmUJ4',
  authDomain: 'crwn-clothing-app-c9821.firebaseapp.com',
  projectId: 'crwn-clothing-app-c9821',
  storageBucket: 'crwn-clothing-app-c9821.appspot.com',
  messagingSenderId: '152860434675',
  appId: '1:152860434675:web:7cd989ec21003e80a45786'
};

const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const createUserDocumentFromAuth = async (
  userAuth,
  addtionalInfo = {}
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInfo
      });
    } catch (error) {
      console.log('error creating the user ', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
