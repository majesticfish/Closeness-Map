function randomizeLocation(){
	var n = document.getElementById("one");
	var m = document.getElementById("two"); 
	n.style.top = Math.random() * 500 + "px";
	m.style.left = Math.random() * 500 + "px";
	n.style.left = Math.random() * 500 + "px";
	m.style.top = Math.random() * 500 + "px";
}
