import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzjo0e-4gpobBKGLPLBnQ-3yipsxEpTGg",
  authDomain: "clone-a1bca.firebaseapp.com",
  databaseURL: "https://clone-a1bca.firebaseio.com",
  projectId: "clone-a1bca",
  storageBucket: "clone-a1bca.appspot.com",
  messagingSenderId: "34496862022",
  appId: "1:34496862022:web:cb144c4ef5c8c709673747",
  measurementId: "G-Y2QT5PZBBN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
