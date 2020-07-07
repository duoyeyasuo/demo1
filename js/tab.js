window.onload=function(){
	new Tab({ "id":"listul","ids":"xuan"})
	function Tab(obj){
	this.uls 		= document.getElementById(obj.id);
	this.ulsLis		= this.uls.getElementsByTagName("li");
	this.box 		= document.getElementById(obj.ids);
	this.boxChild 	= this.box.children;
	var ac 		= this.boxChild;
	var ulsi 	= this.ulsLis;	
	this.inIt = function(){
		for(var i=0;i<this.ulsLis.length;i++){
			this.ulsLis[i].index = i;
			this.ulsLis[i].onmouseover = function(){
				for(var j=0;j<ac.length;j++){
					ulsi[j].className = "";
					ac[j].style.display = "none";
				}
				this.className = "check";
				ac[this.index].style.display = "block";
			}
		}
	}
	this.inIt();
}
}