  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBgyIY1ru34Ij6KO_-RVTICcEsTzJ8yuU",
    authDomain: "attenman.firebaseapp.com",
    databaseURL: "https://attenman.firebaseio.com",
    projectId: "attenman",
    storageBucket: "",
    messagingSenderId: "1035758949707",
    appId: "1:1035758949707:web:4779f27dd6c1a12e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});