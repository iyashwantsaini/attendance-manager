var studmail=document.getElementById("studmail");
var teachmail=document.getElementById("teachmail");
var adminmail=document.getElementById("adminmail");
var studpass=document.getElementById("studpass");
var teachpass=document.getElementById("teachpass");
var adminpass=document.getElementById("adminpass");

var studloginsub=document.getElementById("studsubmit");
var teachloginsub=document.getElementById("teachsubmit");
var adminloginsub=document.getElementById("adminsubmit");

var user=null;

studloginsub.addEventListener('click', (e) => {
  e.preventDefault();
  var email=studmail.value+"@student.com";
  var pass=studpass.value;
  var auth=firebase.auth();
  
  auth.signInWithEmailAndPassword(email,pass).then(function(){
  console.log("login_success!!");
  
  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("  Email: " + profile.email);
    });
  }    
  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  });
  
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          window.location = '/studentPortal';
      }
  });
});  

teachloginsub.addEventListener('click', (e) => {
  e.preventDefault();
  var email=teachmail.value +"@teacher.com";
  var pass=teachpass.value;
  var auth=firebase.auth();
  
  auth.signInWithEmailAndPassword(email,pass).then(function(){
  console.log("login_success!!");
  
  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("  Email: " + profile.email);
    });
  }
  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  });
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          window.location = '/teacherPortal';
      }
  });
});

adminloginsub.addEventListener('click', (e) => {
  e.preventDefault();
  var email=adminmail.value+"@admin.com";
  var pass=adminpass.value;
  var auth=firebase.auth();
  
  auth.signInWithEmailAndPassword(email,pass).then(function(){
  console.log("login_success!!");
  
  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("  Email: " + profile.email);
    });
  }    
  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  });
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          window.location = '/admin';
      }
  });
});

  
//   auth.onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("user logged in!");
//      var database = firebase.database();
//   var name="yash";
//   var email="yash@yash.com";
//   firebase.database().ref('users').push({
//     username: name,
//     email: email });
//   } else {
//     console.log("not found eror!");
//   });
//     // User is signed out.
//   }
//   });
// });

// studlogoutsub.addEventListener('click', (e) => {
//   e.preventDefault();
  
//   var auth=firebase.auth();
//   auth.signOut().then(function() {
//   // Sign-out successful.
//   }, function(error) {
//   // An error happened.
//   });

// });


  // auth.createUserWithEmailAnd

  
  // auth.createUserWithEmailAndPassword(email, pass).then(function (){
  // var database = firebase.database();
  // var name="yash";
  // var email="yash@yash.com";
  // firebase.database().ref('users').push({
  //   username: name,
  //   email: email });
  // }).catch(function(error) {
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // console.log("error_!!");
  // });

// Password(email, pass).then(function (){
  // var database = firebase.database();
  // var name="yash";
  // var email="yash@yash.com";
  // firebase.database().ref('users').push({
  //   username: name,
  //   email: email });
  // }).catch(function(error) {
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // console.log("error_!!");
  // });
  

  var database=document.getElementById("console_database");
  database.addEventListener('click',(e) => {
  console.log("clicked");
  var ref=firebase.database().ref('/users/');
    ref.on('value',function(snapshot) {
      var datajson=snapshot.val();
      console.log(datajson);
    });
    
  });
