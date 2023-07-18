// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBoSI-PMoVuC3hrJ0f6tARhSrq4m4t-0AY",
  authDomain: "react-netflix-9ff6c.firebaseapp.com",
  projectId: "react-netflix-9ff6c",
  storageBucket: "react-netflix-9ff6c.appspot.com",
  messagingSenderId: "329910744647",
  appId: "1:329910744647:web:976f9711ebb3219e0e2362"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);