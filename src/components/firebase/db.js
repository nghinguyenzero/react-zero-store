// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPEGUkr0VOsojQtzKLoavMvw8aexq5JU",
  authDomain: "react-zero-store.firebaseapp.com",
  projectId: "react-zero-store",
  storageBucket: "react-zero-store.appspot.com",
  messagingSenderId: "283491014047",
  appId: "1:283491014047:web:3dc6c10127fb00c0acd9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

async function register({firstname, lastname, email, password}) {
  const resp = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await updateProfile(resp.user,{displayName: `${firstname} ${lastname}`})

}

async function login({email, password}) {
  const resp = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
  return resp.user

}

async function logout() {
  await signOut(auth)
    
}

export const firebasedb = {
    register: register,
    login: login,
    logout: logout
} 