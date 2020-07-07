window.onload=function(){
	var button=document.getElementById("button");
	var yuan=document.getElementById("yuan");
	var lis=yuan.children;
	var left=document.getElementById("buttonleft");
	var rightone=document.getElementById("buttonright");
	var listone=document.getElementsByClassName("list")[0];
	var listwrap=document.getElementById("listwrap");
	var num="";	
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
	left.onclick=function(){
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