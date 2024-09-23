// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KET,
    authDomain: import.meta.env.AUTODOMAIN,
    projectId: import.meta.env.PROJECID,
    storageBucket: import.meta.env.STORAGEBUCKET,
    messagingSenderId: import.meta.env.MESSAGINGSENDERID,
    appId: import.meta.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const baseDeDatos = getFirestore(main);