var teachadd=document.getElementById("teachadd");
var studadd=document.getElementById("studadd");

var teachfirst=document.getElementById("teacher_first_name");
var teachlast=document.getElementById("teacher_last_name");
var teachmail=document.getElementById("teacher_code");
var teachcode=document.getElementById("teacher_email");

var studentfirst=document.getElementById("student_first_name");
var studentlast=document.getElementById("student_last_name");
var studentroll=document.getElementById("student_roll_no");

studadd.addEventListener('click',function(){
  console.log("hello");
});

teachadd.addEventListener('click',(e) => {
    // var e = document.getElementById("year");
    // var strUser = e.options[e.selectedIndex].value;
    // console.log(strUser);
    console.log("hello");
    console.log(teachfirst.value);
  });
var x = document.getElementById("teachadd");
x.addEventListener("click", (e) => {
  console.log("working !!");
});

