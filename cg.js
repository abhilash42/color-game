var numSquares=9;
var colors=gencolarr(numSquares);
//console.log(colors);
var squares=document.querySelectorAll(".square");
var pickcol=randomPickCol();
var colordp=document.querySelector("#colorDisp");
var resbut=document.querySelector("#reset");
var header=document.querySelector("h1");
var modeButtons=document.querySelectorAll(".mode");
var skorDisp=document.querySelector("#skore");
var hskorDisp=document.querySelector("#hskore");
var nextbut=document.querySelector(".next");
//console.log(resbut);
// console.log(header);
nextbut.addEventListener("click", function(e) {
  // body...
  next();
});
var counter=9;
var score=0;
var highscore=0;

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(e) {
		// body...
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		// this.textContent=="Easy"?numSquares=3:numSquares=6;
		if(this.textContent=="Easy")
		{
			numSquares=3;
      counter=numSquares;
		}
		else if (this.textContent=="Hard") {
			numSquares=6;
      counter=numSquares;

		}
		else {
			numSquares=9;
      counter=numSquares;

		}

		newGame();
	});
}

function newGame(){
  counter=numSquares;
  score=0;
  skore.textContent=0;
	resbut.textContent="New Colors";
	//change message to null
	resultdisp.textContent="";
	//gen all new colors
	colors=gencolarr(numSquares);
	//pick a new randon color
	pickcol=randomPickCol();
	colordp.textContent=pickcol;
	//change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];

		}
		else{
			squares[i].style.display="none";
		}
	}
	header.style.background="steelblue";

}
function next(){
  counter=numSquares;
  resbut.textContent="New Colors";
	//change message to null
	resultdisp.textContent="";
	//gen all new colors
	colors=gencolarr(numSquares);
	//pick a new randon color
	pickcol=randomPickCol();
	colordp.textContent=pickcol;
	//change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];

		}
		else{
			squares[i].style.display="none";
		}
	}
	header.style.background="steelblue";
}
colordp.textContent=pickcol;

var resultdisp=document.querySelector("#msg");


for(var i=0;i<colors.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	var clicol=this.style.background;
	//console.log(clicol);
	if(clicol==pickcol)
	{


		resultdisp.textContent="Correct";
		changecol(clicol);
		resbut.textContent="Play Again?";
    score+=counter;
    //console.log(localStorage.getItem("highscore"));
    skorDisp.textContent=score;
      if(highscore<score)
      {
        highscore=score;
      // console.log(highscore);

        hskorDisp.textContent=highscore;
      }


    //console.log(score);
    counter=0;

	}
	else {

		resultdisp.textContent="Wrong, Try Again";
		this.style.background="#232323";
    counter-=2;
	}

		}

	);
	}

function changecol(color) {
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
		header.style.background=color;
	}
}

function randomPickCol(){
	return colors[Math.floor(Math.random()*colors.length)];
}
function gencolarr(num){
	var arr=[];
			for(var i=0;i<num;i++)
			{
				var r=Math.floor(Math.random()*256);
				var b=Math.floor(Math.random()*256);
				var g=Math.floor(Math.random()*256);
				var str="rgb"+"("+r+", "+g+", "+b+")";
				arr.push(str);
			}
			return arr;
}
resbut.addEventListener("click", function(e) {

	newGame();
});
