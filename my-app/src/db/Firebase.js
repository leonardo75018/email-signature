import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAHY2yDzZQ0lDGWb2k-FhMNPXnW5dIMgyk",
    authDomain: "backwidactic.firebaseapp.com",
    projectId: "backwidactic",
    storageBucket: "backwidactic.appspot.com",
    messagingSenderId: "810548117916",
    appId: "1:810548117916:web:a446bbc175a4be68ae8859"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()



export { db, firebase }