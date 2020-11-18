import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOeyTLOW6i_xa7H4LRBEjRYsfS6uD6MPI",
    authDomain: "clone-a125e.firebaseapp.com",
    databaseURL: "https://clone-a125e.firebaseio.com",
    projectId: "clone-a125e",
    storageBucket: "clone-a125e.appspot.com",
    messagingSenderId: "972084185862",
    appId: "1:972084185862:web:98ec49985e6a5d2fc3ec87",
};

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

const db: firebase.firestore.Firestore = firebaseApp.firestore();
const auth: firebase.auth.Auth = firebase.auth();
// const provider: firebase.auth.EmailAuthProvider = new firebase.auth.EmailAuthProvider();

export {db, auth}
