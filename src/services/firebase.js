import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA24aHmAjjwW0EpjUkATgq1I-0YeZMQZ6g",
  authDomain: "chat-3a5e2.firebaseapp.com",
  projectId: "chat-3a5e2",
  storageBucket: "chat-3a5e2.appspot.com",
  messagingSenderId: "569070806100",
  appId: "1:569070806100:web:9c27447664db1d3d61b9c1"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
