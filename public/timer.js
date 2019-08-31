export function timer(){
    var date=new Date();
console.log(date);

var seconds=date.getSeconds();
console.log(seconds);
 var t=setInterval(function(){
    var newDate=new Date().getSeconds();
    if(newDate-seconds>5){
        clearInterval(t);
        return true;
    }
    console.log(newDate);
}
,1000);
}
timer();
//import { timer()} from './timer.js';