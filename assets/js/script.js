var colorArray = [];
var primaryColor;
var previousColor;
var hardLevel = true;
var left = document.querySelector("#left");
var checker = document.querySelector("#check");

function randomNum(){
	return Math.floor(Math.random()*256);
}

function generateRGB(){
	return "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}

function generateColorArray(){
	if (hardLevel){
		console.log("hi");
		for(var i = 0; i < 6; i++){
			colorArray.push(generateRGB());
		}
	}

	else{
		console.log("yesss");
		for(var i = 0; i < 3; i++){
			colorArray.push(generateRGB());
		}
	}
}

function removeColorArray(){
	if (hardLevel){
		for(var i = 0; i < 6; i++){
			colorArray.pop();
		}
	}

	else{
		for(var i = 0; i < 3; i++){
			colorArray.pop();
		}
	}	
}

function colorDivs(){
	generateColorArray();
	if (hardLevel){
		primaryColor = colorArray[Math.floor(Math.random()*6)];
	}
	else{
		primaryColor = colorArray[Math.floor(Math.random()*3)];
	}
	var divsToColor = document.querySelectorAll(".color");
	var header = document.querySelector("#header");
	console.log(colorArray.length);
	for(var i = 0; i < colorArray.length; i++){
		divsToColor[i].style.backgroundColor = colorArray[i];

		if (!hardLevel){
			for(var a = 3; a < 6; a++){
				divsToColor[a].style.backgroundColor = "#2a2a2a";
			}
		}

		divsToColor[i].addEventListener("click", function(){
			if(this.style.backgroundColor == primaryColor){
				console.log("hi");
				header.style.backgroundColor = primaryColor;
				checker.innerHTML = "CORRECT!";
				
				var list = document.getElementsByTagName("li");
				for(var a = 0; a < list.length; a++){
					list[a].style.color = primaryColor;
				}
				
				for(var a = 0; a < colorArray.length; a++){
					divsToColor[a].style.backgroundColor = primaryColor;
				}

				left.innerHTML = "PLAY AGAIN?";
			}
			else{
				checker.innerHTML= "TRY AGAIN";
				this.style.backgroundColor = "#2a2a2a";
			}
		})
		var rgb = document.querySelector("#rgb");

		rgb.innerHTML = primaryColor.toUpperCase();
		rgb.style.color = "#fcfcfc";
	}

}

var change = document.querySelector("#left");
change.onclick = function(){
	checker.innerHTML = " ";
	left.innerHTML = "CHANGE COLOR";
	removeColorArray();
	colorDivs();
}

var easyOption = document.querySelector("#easy");
var hardOption = document.querySelector("#hard");

function easy(){
	easyOption.style.backgroundColor = "#efefef";
	hardOption.style.backgroundColor = "#fcfcfc";
	removeColorArray();
	hardLevel = false;
	colorDivs();
}

function hard(){
	hardOption.style.backgroundColor = "#efefef";
	easyOption.style.backgroundColor = "#fcfcfc";
	removeColorArray();
	hardLevel = true;
	colorDivs();
}

colorDivs();