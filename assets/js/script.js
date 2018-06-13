var colorArray = [];
var primaryColor;
var previousColor;

function randomNum(){
	return Math.floor(Math.random()*256);
}

function generateRGB(){
	return "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}

function generateColorArray(){
	for(var i = 0; i < 6; i++){
		colorArray.push(generateRGB());
	}
}

function removeColorArray(){
	for(var i = 0; i < 6; i++){
		colorArray.pop();
	}
}

function colorDivs(){
	generateColorArray();
	var num = Math.floor(Math.random()*6);
	primaryColor = colorArray[num];
	var divsToColor = document.querySelectorAll(".color");
	var header = document.querySelector("#header");
	var checker = document.querySelector("#check")
	for(var i = 0; i < colorArray.length; i++){
		divsToColor[i].style.backgroundColor = colorArray[i];

		divsToColor[i].addEventListener("click", function(){
			if(this.style.backgroundColor == primaryColor){
				header.style.backgroundColor = primaryColor;

				var list = document.getElementsByTagName("li");
				for(var a = 0; a < list.length; a++){
					list[a].style.color = primaryColor;
				}
				
				removeColorArray();
				colorDivs();

				checker.innerHTML = "CORRECT!";

			}

			else{
				checker.innerHTML = "INCORRECT!";
			}
		})
		var rgb = document.querySelector("#rgb");

		rgb.innerHTML = primaryColor.toUpperCase();
		rgb.style.color = "#fcfcfc";
	}

}

var change = document.querySelector("#left");
change.onclick = function(){
	removeColorArray();
	colorDivs();
}

console.log(colorDivs());