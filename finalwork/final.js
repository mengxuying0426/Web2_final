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
//图标效果
	var final1 = document.getElementById('final1');
	var ji1 = document.getElementById('ji1');
	var ji2 = document.getElementById('ji2');
	var ji3 = document.getElementById('ji3')
	var ji4 = document.getElementById("ji4");
	function tan(){
    var timer1=setTimeout(
    	function(){
            ji1.style.display='inline';
		 },300)
    var timer2=setTimeout(
    	function(){
            ji2.style.display='inline';
    	},600)
    var timer3=setTimeout(
    	function(){
            ji3.style.display='inline';
    },800)
    var timer4=setTimeout(
    	function(){
            ji4.style.display='inline';
    },1000)
  }
  final1.onmouseover=function(){
            	tan();
            }
