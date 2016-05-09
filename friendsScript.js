function myMove(){
	var elems = [document.getElementById("one"),document.getElementById("two")];
	var pos = [getPosition(elems[0]), getPosition(elems[1])];
	var vel = [[0,0],[0,0]];
	var accel = [[0,0],[0,0]];
	var sprintConstant = 0.003;
	var electrostatic = -10000;
	var id = setInterval(frame, 30);
	function frame(){
		elems = [document.getElementById("one"),document.getElementById("two")];
		updateAcceleration();
		updateSpeed();
		updatePosition();
	}
	function updateAcceleration(){
		var distance = Math.sqrt(Math.pow(pos[0].x-pos[1].x, 2)+Math.pow(pos[0].y-pos[1].y,2));
		var magnitude = (distance*sprintConstant+electrostatic/Math.pow(distance,2));
		accel[0][0] = magnitude*(pos[1].x-pos[0].x)/distance;
		accel[0][1] = magnitude*(pos[1].y-pos[0].y)/distance;
		accel[1][0] = -accel[0][0];
		accel[1][1] = -accel[0][1];
	}
	function updateSpeed(){
		vel[0][0] += accel[0][0];
		vel[0][1] += accel[0][1];
		vel[1][1] += accel[1][1];
		vel[1][0] += accel[1][0];
		vel[0][0] *= 0.99;
		vel[0][1] *= 0.99;
		vel[1][0] *= 0.99;
		vel[1][1] *= 0.99;
	}
	function updatePosition(){
		elems[0].style.left = pos[0].x + vel[0][0] + "px";
		elems[0].style.top = pos[0].y + vel[0][1] + "px";
		elems[1].style.left = pos[1].x + vel[1][0] + "px";
		elems[1].style.top = pos[1].y + vel[1][1] + "px";
		pos[0].x += vel[0][0];
		pos[0].y += vel[0][1];
		pos[1].x += vel[1][0];
		pos[1].y += vel[1][1];
  	}
}
function getPosition(el){
	var posX = 0;
	var posY = 0;
	posX += (el.offsetLeft - el.scrollLeft + el.clientLeft);
	posY += (el.offsetTop - el.scrollTop + el.clientTop);
	el = el.offsetParent;
	return{
		x:posX,
		y:posY
	};
}
