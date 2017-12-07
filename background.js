var angle = 0;

var changeBackground = function(){
	angle = angle + .5;

	document.body.style.backgroundImage = "linear-gradient("+ angle +"deg,  #ff4141, #2727e6)"

	requestAnimationFrame(changeBackground)
}
changeBackground()