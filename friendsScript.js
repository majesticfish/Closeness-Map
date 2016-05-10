function myMove(){
	var elems = [document.getElementById("one"),document.getElementById("two"),document.getElementById("three")];
	var pos = [getPosition(elems[0]), getPosition(elems[1]), getPosition(elems[2])];
	var vel = [[0,0],[0,0],[0,0]];
	var accel = [[0,0],[0,0],[0,0]];
	var sprintConstant = 0.003;
	var electrostatic = -10000;
	var id = setInterval(frame, 30);
	function frame(){	
		elems = [document.getElementById("one"),document.getElementById("two"),document.getElementById("three")];
		updateAcceleration();
		updateSpeed();
		updatePosition();
	}
	function updateAcceleration(){
		accel = [[0,0],[0,0],[0,0]];
		pos = [getPosition(elems[0]), getPosition(elems[1]), getPosition(elems[2])];
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j ++){
				if(i == j){
					continue;
				}
				var distance = Math.sqrt(Math.pow(pos[i].x-pos[j].x, 2)+Math.pow(pos[i].y-pos[j].y,2));
				var magnitude = (distance*sprintConstant+electrostatic/Math.pow(distance,2));
				accel[i][0] += magnitude*(pos[j].x-pos[i].x)/distance;
				accel[i][1] += magnitude*(pos[j].y-pos[i].y)/distance;
				accel[j][0] -= accel[i][0];
				accel[j][1] -= accel[i][1];
			}
		}
	}
	function updateSpeed(){
		for(var i = 0; i < 3; i ++){
			for(var j = 0; j < 2; j ++){
				vel[i][j] += accel[i][j];
				vel[i][j] *= 0.99;
			}
		}
	}
	function updatePosition(){
		for(var i = 0; i < 3; i ++){
			elems[i].style.left = pos[i].x + vel[i][0] + "px";
			elems[i].style.top = pos[i].y + vel[i][1] + "px";
			pos[i].x += vel[i][0];
			pos[i].y += vel[i][1];
		}
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
