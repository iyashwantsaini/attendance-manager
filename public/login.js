var studmail=document.getElementById("studmail");
var teachmail=document.getElementById("teachmail");
var adminmail=document.getElementById("adminmail");
var studpass=document.getElementById("studpass");
var teachpass=document.getElementById("teachpass");
var adminpass=document.getElementById("adminpass");

var studloginsub=document.getElementById("studsubmit");
var teachloginsub=document.getElementById("teachsubmit");
var adminloginsub=document.getElementById("adminsubmit");

studloginsub.addEventListener('click', (e) => {
  e.preventDefault();
  var email=studmail.value;
  var pass=studpass.value;
  var auth=firebase.auth();
  
  auth.signInWithEmailAndPassword(email,pass).then(cred => {
    // console.log(cred.user);
    // export cred
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorMessage);
  });
  
  auth.createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
  
  auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("user logged in!");
      
  var database = firebase.database();
  var name="yash";
  var email="yash@yash.com";
    firebase.database().ref('users').set({
    username: name,
    email: email,
    // profile_picture : imageUrl
  });
  } else {
    console.log("not found eror!");
    // User is signed out.
  }
  });
});

// studlogoutsub.addEventListener('click', (e) => {
//   e.preventDefault();
  
//   var auth=firebase.auth();
//   auth.signOut().then(function() {
//   // Sign-out successful.
//   }, function(error) {
//   // An error happened.
//   });

// });