import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNlyitmpMpTPfVYGqOcQ7Gi6Eliz1mAUc",
  authDomain: "miniblog-e6cd7.firebaseapp.com",
  projectId: "miniblog-e6cd7",
  storageBucket: "miniblog-e6cd7.appspot.com",
  messagingSenderId: "168615095418",
  appId: "1:168615095418:web:0cca53805705849d0d9fc3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };