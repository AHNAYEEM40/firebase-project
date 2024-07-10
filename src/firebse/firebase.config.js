// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJYpB1IdUiqtosrluYUogqu8d6ABwFLy0",
  authDomain: "first-firabse.firebaseapp.com",
  projectId: "first-firabse",
  storageBucket: "first-firabse.appspot.com",
  messagingSenderId: "814634478276",
  appId: "1:814634478276:web:561b4af5f774875cf03791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

