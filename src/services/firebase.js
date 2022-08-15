import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC4Yl-ZpxlVag8Ru-zOewaoLv7lzwcGEU",
  authDomain: "chatapp-5bec3.firebaseapp.com",
  projectId: "chatapp-5bec3",
  storageBucket: "chatapp-5bec3.appspot.com",
  messagingSenderId: "904380721006",
  appId: "1:904380721006:web:dc55e2fac645e0c943c37f",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
