window.onload=function(){
function my$(id){return document.getElementById(id);}
var box 	= my$("box");
var inner 	= box.children[0];
var ulObj	= inner.children[0];
var list	= ulObj.children;
var olObj	= inner.children[1];
var imgWidth= inner.offsetWidth;
var pic 	= 0; 
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
 	clearInterval(timeId)
 }
 box.onmouseout = function(){
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
}