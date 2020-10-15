import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD5B4mNde6aYGjDPtlVkGUx8g-Zn3KzXgc",
    authDomain: "clone-6617d.firebaseapp.com",
    databaseURL: "https://clone-6617d.firebaseio.com",
    projectId: "clone-6617d",
    storageBucket: "clone-6617d.appspot.com",
    messagingSenderId: "860584345894",
    appId: "1:860584345894:web:35e8f8d8bea5de85cc41e7",
    measurementId: "G-LPSP506YGZ"

});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};