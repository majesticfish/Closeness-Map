function myMove(){
	var elem = document.getElementById("animate");
	var posX = 0;
	var posY = 0;
	var vX = 1;
	var vY = 0;
	var aY = 1;
	var id = setInterval(frame, 50);
	function frame(){
		elem.style.top = posY + vY + 'px';
		elem.style.left = posX + vX + 'px';
		posY += vY;
		posX += vX;
		if(posY > 500 && vY > 0){
			vY = -vY;
		}else{
			vY += aY;
		}
	}
}
