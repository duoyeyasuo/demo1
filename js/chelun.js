window.onload=function(){
function $(id){return document.getElementById(id);}
var box=$("box");
var inner=box.children[0];
var ul=inner.children[0];
var ol=inner.children[1];
var lis=ul.children;
var imgwidth=inner.offsetWidth;
var pic= 0;
var index=0;
for(var i=0;i<lis.length;i++){
    var olli=document.createElement("li");
    olli.setAttribute("index",i);
    ol.appendChild(olli);
    olli.onmousemove=function(){
        animate(pic);
        pic=this.getAttribute("index");
         onMouseClick(ul,-pic*imgwidth);
    }
}
ol.children[0].className="current";
function animate(num){
    for(var j=0;j<ol.children.length;j++){
        ol.children[j].removeAttribute("class");
    }
    ol.children[num].className="current";
}
function onMouseClick(obj,num){
    var time=setInterval(function(){
        clearInterval(time);
        obj.style.left=num+"px";
    },10)
}
var time2=null;
function lun(){
    time2=setInterval(function(){
        if(index==lis.length){
            index=0;
        }
        onMouseClick(ul,-index*imgwidth); 
        animate(index);
        index++;
    },1000)
}
lun();
box.onmouseover=function(){
    clearInterval(time2);
}
box.onmouseout=function(){
    lun();
}
}