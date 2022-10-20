import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYQqmKGZjuRi65z20MiiCtF3UVxNEW1SE',
  authDomain: 'cool-clothing-db-956ee.firebaseapp.com',
  projectId: 'cool-clothing-db-956ee',
  storageBucket: 'cool-clothing-db-956ee.appspot.com',
  messagingSenderId: '991666070062',
  appId: '1:991666070062:web:fe5ce55f1c06fdf71eb5bf',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
