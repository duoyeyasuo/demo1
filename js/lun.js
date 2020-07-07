window.onload=function(){
function my$(id){return document.getElementById(id);}
var box 	= my$("box");
var inner 	= box.children[0];
var ulObj	= inner.children[0];
var list	= ulObj.children;
var olObj	= inner.children[1];
var arr		= my$("arr");
var right	= my$("right");
var imgWidth= inner.offsetWidth;
var pic 	= 0; 
var button=document.getElementById("button");
	var yuan=document.getElementById("yuan");
	var lis=yuan.children;
	var leftone=document.getElementById("buttonleft");
	var rightone=document.getElementById("buttonright");
	var listone=document.getElementsByClassName("list")[0];
	var listwrap=document.getElementById("listwrap");
	var num="";	
for(var i=0;i<list.length;i++){ 
	var liObj = document.createElement("li"); 
	liObj.innerHTML = i+1;
	liObj.setAttribute("index",i);
	olObj.appendChild(liObj);
	liObj.onmouseover = function(){
		for(var j=0;j<olObj.children.length;j++){
			olObj.children[j].removeAttribute("class");
		}
		this.className = "current" 
		pic  = this.getAttribute("index") 
		animate(ulObj, -pic*imgWidth);
	}
}
function animate(element,target){ 
	clearInterval(element.timeId);
	element.timeId = setInterval(function(){
		var current = element.offsetLeft; 
		step  =  10;
		step = current<target?step:-step; 
		current += step;
			if(Math.abs(current-target)>Math.abs(step)){
				element.style.left = current+"px";  
			}else{
				clearInterval(element.timeId); 
				element.style.left = target+"px"; 
			}
	},10)
}
olObj.children[0].className = "current";
ulObj.appendChild(ulObj.children[0].cloneNode(true));
 var timeId = setInterval(onMouseClickHandle,1000);
 box.onmouseover = function(){
 	arr.style.display = "block";
 	clearInterval(timeId)
 }
 box.onmouseout = function(){
 	 arr.style.display = "none";
 	 timeId = setInterval(onMouseClickHandle,1000);
 }
function onMouseClickHandle(){
	if(pic==list.length-1){ 
		pic=0;
		ulObj.style.left = 0+"px";
	}
	pic++
	animate(ulObj, -pic*imgWidth); 
	if(pic==list.length-1){ 
		olObj.children[olObj.children.length-1].className = "";
		olObj.children[0].className = "current";
	}else{
		for(var j=0;j<olObj.children.length;j++){
			olObj.children[j].removeAttribute("class");
		}
		olObj.children[pic].className = "current"
	}
}
right.onclick = onMouseClickHandle;
left.onclick = function(){
	if(pic==0){
		pic=list.length-1;
		ulObj.style.left = -pic*imgWidth+"px";
	}
	pic--
	animate(ulObj, -pic*imgWidth);
	for(var j=0;j<olObj.children.length;j++){
		olObj.children[j].removeAttribute("class");
	}
		olObj.children[pic].className = "current"
}
listwrap.onmousemove=function(){
		button.style.display="block";
	}
	listwrap.onmouseout=function(){
		button.style.display="none";
	}
	rightone.onclick=function(){
       listone.style.left=listone.offsetLeft-num +"px";
       // console.log( list.offsetLeft);
		if(listone.offsetLeft<=-300){
			num=0;
		}else{
			num=60;
		}
		if(listone.offsetLeft<0){
			lis[0].removeAttribute("class");
			lis[1].className="xuanyuan";
		}
	}
	leftone.onclick=function(){
		listone.style.left = listone.offsetLeft+num +"px";
		// console.log(list.offsetLeft);
		if(listone.offsetLeft<0){
			num=60;
		}else{
			num=0;
		}
		if(listone.offsetLeft==0){
			// console.log(1);
			lis[1].removeAttribute("class");
			lis[0].className="xuanyuan";
		}
	}
}