// 上方图切换
var headbanner = document.getElementById('headbanner');
var banner = document.getElementById('banner');
var li = document.getElementsByTagName('li');
var gailan = document.getElementById('gailan');
var ngl = document.getElementById('ngl');
var i = 0;
function change(){
	for(var j = 0;j<li.length;j++){
		li[j].className = '';
	}
	if(i==6){
		i=0;
	}
	if(i<6){
		li[i].className = 'sp';
		li[i+6].className = 'sty';
		i++;
	}
}
var timer = setInterval(change,1500);

headbanner.onmouseover = function(){
	clearInterval(timer);
}
headbanner.onmouseout = function(){
	timer = setInterval(change,1500);
}

