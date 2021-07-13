import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBsZOy9xwN3ezHSFPk1WQfl8u_jmdeZja4",
    authDomain: "facebook-messenger-clone-10c93.firebaseapp.com",
    projectId: "facebook-messenger-clone-10c93",
    storageBucket: "facebook-messenger-clone-10c93.appspot.com",
    messagingSenderId: "791401853009",
    appId: "1:791401853009:web:e27e063d96ac3ea3a08870",
    measurementId: "G-V1RKYSCQKN"

});

const db = firebaseApp.firestore();

export default db ;




