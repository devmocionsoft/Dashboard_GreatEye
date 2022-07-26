import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLh3r7Qa7S_94-iAHXnm8bRnWSCTXKFys",
  authDomain: "vassar-4f811.firebaseapp.com",
  projectId: "vassar-4f811",
  storageBucket: "vassar-4f811.appspot.com",
  messagingSenderId: "1057750528848",
  appId: "1:1057750528848:web:fd22d5b2bb2beb2529f255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
