import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4fVmEHVH96X4zrs5a_uVcPiR68vFw7b8",
    authDomain: "book-worm-cbb06.firebaseapp.com",
    databaseURL: "https://book-worm-cbb06.firebaseio.com",
    projectId: "book-worm-cbb06",
    storageBucket: "book-worm-cbb06.appspot.com",
    messagingSenderId: "185889340651",
    appId: "1:185889340651:web:021451c3284f46d4c512ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
      google: new firebase.auth.GoogleAuthProvider()
  }

  export const firestore = firebase.firestore();

  export default firebase;