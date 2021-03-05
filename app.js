var borders=document.querySelectorAll(".border");
var colors = [];
var numOfColors=6;
var pickedColor,clickedColor;
var headingColor= document.getElementById("rgb");
var button= document.querySelector("button");
var h1=document.querySelector("h1");
var message=document.querySelector("#message");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".effect");

init();

for(var i=0;i<borders.length; i++){
	borders[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			right();
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});
}

easy.addEventListener("click",function(){
	hard.classList.remove("effect");
	easy.classList.add("effect");
	button.textContent="NEW COLORS";
	numOfColors=3;
	colors = [];
	init();
});

hard.addEventListener("click",function(){
	easy.classList.remove("effect");
	hard.classList.add("effect");
	button.textContent="NEW COLORS";
	numOfColors=6;
	colors=[];
	init();
});

function right(){
	for(var i=0;i< borders.length; i++){
		borders[i].style.backgroundColor=pickedColor;
	}
	h1.style.backgroundColor=pickedColor;
	button.textContent="PLAY AGAIN?";
	message.textContent="Correct!";
}


function init(){
	getColors();
	h1.style.backgroundColor = "steelblue";
	message.textContent="";
	for(var i=0;i< borders.length ;i++){
		if(i<numOfColors){
			borders[i].style.backgroundColor = colors[i];	
			borders[i].style.display="block";
		}else{
			borders[i].style.display = "none";
		}
	}
	pickedColor= colors[Math.floor(Math.random() * numOfColors)];
	headingColor.textContent=pickedColor;
}


function getColors(){
	var i=0,color;
	while(i<numOfColors){
		color=rgb();
		if(colors.indexOf(color)===-1){
			colors.push(color);
			i++;
		}
	}
} 

function rgb(){
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);
	var rgbColor="rgb(" + r + ", " + g + ", " + b + ")";
	return rgbColor;
}

button.addEventListener("click",function(){
	button.textContent="NEW COLORS";
	colors=[];
	init();

});




