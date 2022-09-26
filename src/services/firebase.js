import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatapp-5bec3-default-rtdb.firebaseio.com"
});


const firebaseConfig = {
  apiKey: "AIzaSyBOucKWnXVNX9GT8zmOuLNNlxkUq0KLVkA",
  authDomain: "chatapp-5bec3.firebaseapp.com",
  databaseURL: "https://chatapp-5bec3-default-rtdb.firebaseio.com",
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
