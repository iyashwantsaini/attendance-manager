
		var arr1 = new Array(10);
		for (var i = 0; i < arr1.length; i++) {
			arr1[i] = new Array(10);
		}




		var t = function () {
			var table = document.getElementById("demo");
			for (var i = 0; i < 10; i++) {
				var row = document.createElement("tr");
				for (var j = 0; j < 10; j++) {

					var col = document.createElement("td");
					arr1[i][j] = (i * 10) + j + 1;
					col.innerHTML = (i * 10) + j + 1; // assigning value to the cell
					col.style.fontSize = "50px";
					row.appendChild(col);
				}
				table.appendChild(row);
			}
		};
		window.onload = t;

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