var n=1;
			function timer(){
			var date=new Date();
			console.log(date);

			var seconds=date.getSeconds();
				console.log(seconds);
	 		var t=setInterval(function(){
			var newDate=new Date().getSeconds();
			if(newDate-seconds>5){
			clearInterval(t);
			document.getElementById("demo").innerHTML="";
			
				clearInterval(t);

		}
		console.log(newDate);
		n++;

	}
	,1000);

	};
	timer();
	export default arr1;