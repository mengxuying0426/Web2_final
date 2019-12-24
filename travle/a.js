
window.onload = function () {
 var arr = [
  { // 1
   width:120,
   top:11,
   left:87,
   opacity:20,
   zIndex:2
  },
  { // 2
   width:120,
   top:11,
   left:237,
   opacity:40,
   zIndex:3
  },
  { // 3
   width:144,
   top:0,
   left:387,
   opacity:100,
   zIndex:4
  },
  { // 4
   width:120,
   top:11,
   left:561,
   opacity:40,
   zIndex:3
  },
  { //5
   width:120,
   top:11,
   left:711,
   opacity:20,
   zIndex:2
  }
 ];
 //0.获取元素
 var feedbackslide = document.getElementById("feedbackslide");
 var feedbackliArr = feedbackslide.getElementsByTagName("li");
 var feedbackarrow = feedbackslide.children[1];
 var arrowChildren = feedbackarrow.children;
 var arrowleft=1;
 //设置一个开闭原则变量，点击以后修改这个值。
 var flag = true;
 move();
 //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转) 
 arrowChildren[1].onclick = function () {
  if(flag){
   flag = false;
   move(false);
  }
  arrowleft++;
  console.log("left+++",arrowleft)
  if(arrowleft==1){
  document.getElementById("number").innerText="On the way to the future, everyone is a lone traveler.";
  document.getElementById("feedstudent").innerText="1";
  }else if(arrowleft==2){
   document.getElementById("number").innerText="I always forget to tell you that how lucky I am to encounter you.";
    document.getElementById("feedstudent").innerText="2";
  }else if(arrowleft==3){
    document.getElementById("number").innerText="Youth means limitless possibilities.";
    document.getElementById("feedstudent").innerText="3";
  }else if(arrowleft==4){
   document.getElementById("number").innerText="Don't worry about the vague future,just strive for the clear present.";
    document.getElementById("feedstudent").innerText="4";
  }else if(arrowleft==5){
   document.getElementById("number").innerText="In me the tiger sniffs the rose.";
    document.getElementById("feedstudent").innerText="5";
   arrowleft=0;
  }else{
   document.getElementById("number").innerText="On the way to the future, everyone is a lone traveler.";
  document.getElementById("feedstudent").innerText="1";
   arrowleft=1;
  }
 }
 arrowChildren[0].onclick = function () {
  if(flag){
   flag = false;
   move(true);
  }
  arrowleft--;
  console.log("right---",arrowleft)
  if(arrowleft==1){
   document.getElementById("number").innerText="On the way to the future, everyone is a lone traveler.";
  document.getElementById("feedstudent").innerText="1";
  }else if(arrowleft==2){
   document.getElementById("number").innerText="I always forget to tell you that how lucky I am to encounter you.";
    document.getElementById("feedstudent").innerText="2";
  }else if(arrowleft==3){
    document.getElementById("number").innerText="Youth means limitless possibilities.";
    document.getElementById("feedstudent").innerText="3";
  }else if(arrowleft==4){
   document.getElementById("number").innerText="Don't worry about the vague future,just strive for the clear present.";
    document.getElementById("feedstudent").innerText="4";
  }else{
    document.getElementById("number").innerText="In me the tiger sniffs the rose.";
    document.getElementById("feedstudent").innerText="5";
   arrowleft=5;
  }
 }
 //4.书写函数。
 function move(bool){
  //判断：如果等于undefined,那么就不执行这两个if语句
  if(bool === true || bool === false){
   if(bool){
    arr.unshift(arr.pop());
   }else{
    arr.push(arr.shift());
   }
  }
  //在次为页面上的所有li赋值属性，利用缓动框架
  for(var i=0;i<feedbackliArr.length;i++){
   animate(feedbackliArr[i],arr[i], function () {
    flag = true;
   });
  }
 }
}
