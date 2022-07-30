import { initializeApp } from 'firebase/app';
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAUitSx3he5HnQ6NDh0lBMp2qzr69d-2Yo',
	authDomain: 'consumoresponsable-04.firebaseapp.com',
	projectId: 'consumoresponsable-04',
	storageBucket: 'consumoresponsable-04.appspot.com',
	messagingSenderId: '1016051245626',
	appId: '1:1016051245626:web:788707d9766d46d2654b03',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);

export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    collection,
    addDoc,
  };