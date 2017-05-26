

function mouseOver(click,none){
	click.onmouseover=function(){
		none.style.display="block";
	}
	click.onmouseout=function(){
		none.style.display="none";
	}
}
 