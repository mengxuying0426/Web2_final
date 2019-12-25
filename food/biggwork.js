window.onload = function(){
	var aLi = document.getElementById("place").getElementsByTagName("li");
	var aDiv = document.getElementById("change").getElementsByTagName("div");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
		for(var i=0;i<aLi.length;i++){
		aLi[i].className = "";
		aDiv[i].className = "hide";
		}
		this.className = "active";
		aDiv[this.index].className = "show";
		}
	}
	var timeflag = document.getElementById("timeflag").getElementsByTagName("a");
	for(var i=0;i<timeflag.length;i++){
		timeflag[i].index = i;
		timeflag[i].onclick = function(){
		for(var i=0;i<aLi.length;i++){
		timeflag[i].className = "";
		}
		this.className = "time1";
		}
	}
}


