import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
  apiKey: "AIzaSyCln9GT6vUYLgxDalNCDweYsFoU6S8tlAM",
  authDomain: "fb-messenger-795c1.firebaseapp.com",
  projectId: "fb-messenger-795c1",
  storageBucket: "fb-messenger-795c1.appspot.com",
  messagingSenderId: "741503153662",
  appId: "1:741503153662:web:70fd02d7833a3e8601bcaf",
  measurementId: "G-G4RSK4R7MG"
    }
)

const db=firebaseApp.firestore();
export default db;