
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5Awy5pyW26-0tswiNw4GZe1eS9MYHeUg",
  authDomain: "team-projects-4724e.firebaseapp.com",
  projectId: "team-projects-4724e",
  storageBucket: "team-projects-4724e.appspot.com",
  messagingSenderId: "825594707242",
  appId: "1:825594707242:web:255cc5b45c376b22ebf253"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;