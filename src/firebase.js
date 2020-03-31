import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBtdUACw585CVYpO079zE05tvuOBigy2E",
    authDomain: "well-read-bfcfd.firebaseapp.com",
    databaseURL: "https://well-read-bfcfd.firebaseio.com",
    projectId: "well-read-bfcfd",
    storageBucket: "well-read-bfcfd.appspot.com",
    messagingSenderId: "141750563446",
    appId: "1:141750563446:web:790d5b7db90a58167ee557"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
      google: new firebase.auth.GoogleAuthProvider()
  }

  export const firestore = firebase.firestore();

  export default firebase;