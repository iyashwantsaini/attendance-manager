var teachadd=document.getElementById("teachadd");
var studadd=document.getElementById("studadd");

var teachfirst=document.getElementById("teacher_first_name");
var teachlast=document.getElementById("teacher_last_name");
var teachmail=document.getElementById("teacher_code");
var teachcode=document.getElementById("teacher_email");

var studentfirst=document.getElementById("student_first_name");
var studentlast=document.getElementById("student_last_name");
var studentroll=document.getElementById("student_roll_no");
var studentyear = document.getElementById("year");
var studentbranch=document.getElementById("branch")

teachadd.addEventListener('click',(e) => {
    // console.log(strUser);
    console.log("hello");
  });

studadd.addEventListener('click',(e) => {
    e.preventDefault();
    var year = studentyear.options[studentyear.selectedIndex].value;
    var branch = studentbranch.options[studentbranch.selectedIndex].value;
    var first = studentfirst.value;
    var last = studentlast.value;
    var roll = studentroll.value;
    
      var database = firebase.database();
      firebase.database().ref('users/students/'+roll).set({
      year:year,
      branch:branch,
      first:first,
      last:last,
      });
  
});

