window.onload=function(){
	var geren=document.getElementById("geren");
			var gr=document.getElementById("gr");
			geren.onmouseover=function(){
				gr.style.display="block";
				geren.style.background="#fff";
				geren.style.border="1px solid #f5f5f5";
				geren.style.borderBottom="1px solid transparent";
				geren.style.borderTop="1px solid transparent";
				gr.style.border="1px solid #f5f5f5";
				gr.style.borderTop="1px solid transparent";
			}
			gr.onmouseover=function(){
				geren.style.border="1px solid #f5f5f5";
				geren.style.borderBottom="1px solid transparent";
				geren.style.borderTop="1px solid transparent";
				gr.style.display="block";
				gr.style.color="#f5f5f5";
			}
			gr.onmouseout=function(){
				gr.style.display="none";
			}
			geren.onmouseout=function(){
				gr.style.display="none";
				geren.style.background="";
				geren.style.border="";
			};
}