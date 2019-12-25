// 上方图切换
var headbanner = document.getElementById('headbanner');
var banner = document.getElementById('banner');
var li = document.getElementsByTagName('li');
var gailan = document.getElementById('gailan');
var ngl = document.getElementById('ngl');
var i = 15;
function change(){
	for(var j = 15;j<li.length;j++){
		li[j].className = '';
	}
	if(i==21){
		i=15;
	}
	if(i<21){
		li[i].className = 'sp';
		li[i+6].className = 'sty';
		i++;
	}
}
var time = setInterval(change,2000);

headbanner.onmouseover = function(){
	clearInterval(time);
}
headbanner.onmouseout = function(){
	time = setInterval(change,2000);
}
//图片放大
var img = document.getElementsByTagName('img');
console.log(img);

//下边循环滚动图
	var box = document.getElementById('box');
	// var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;
	//轮播下一张
	function next(){
		if(isMoving){//消除连续点击影响
			return;//不再执行下边代码
		}
		isMoving = true;
		index++;
		animate(slider,{left:-1000*index},function(){
			if(index === 6){
				slider.style.left = "-1000px";
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		animate(slider,{left:-1000*index},function(){
			if(index === 0){
				slider.style.left = "-5000px";
				index = 5;
			}
			isMoving = false;
		});
		
	}
	var timer = setInterval(next,3000);
	//鼠标划入清定时器
	box.onmouseover = function(){
			animate(left,{opacity:50});
			animate(right,{opacity:50});
			clearInterval(timer);
		}
	//鼠标划出开定时器
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
	right.onclick = next;
	left.onclick = prev;

	// for(var i = 0;i<oNavlist.length;i++){
	// 	oNavlist[i].idx = i;
	// 	oNavlist[i].onclick = function(){
	// 		index = this.idx + 1;
	// 		animate(slider,{left:-700*index})
	// 	}
	// }
