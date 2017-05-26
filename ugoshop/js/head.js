function mainHeader(){
    	  //head二维码
    	  
    var _youhui=document.getElementById("youhui");
	var _twocode=document.getElementById("twocode");
	mouseOver(_youhui,_twocode);
    // 购物车点击 
	rightBar();
	cookie();
}
function rightBar(){
	//fix右边固定栏
	var _fix=document.getElementById("fix");
	var _li=_fix.getElementsByTagName("li");
	var _span=_fix.getElementsByTagName("span");
	var _div=_fix.getElementsByTagName("div");
        // console.log(_div)
	for(var i=0;i<_li.length;i++){
	  	_li[i].index=i;
	  	_li[i].onmouseenter=function(){
	  		for(var i=0;i<_span.length;i++){
	  			_span[i].style.display="none"
	  			_div[i].style.display="none"
	  		}
	  		_span[this.index].style.display="block";
	  		_div[this.index].style.display="block";
	  	}
      	_li[i].onmouseleave=function(){
      		_span[this.index].style.display="none";
      		_div[this.index].style.display="none";
      	}
    }
            
//        fix2 右边固定的第二个
    var _fix2=document.getElementById("fix2");
    var _li2=_fix2.getElementsByTagName("li");
    var _span2=_fix2.getElementsByTagName("span");
    var _div2=_fix2.getElementsByTagName("div");
          //console.log(_span2);
    for(var i=0;i<_li2.length;i++){
      	_li2[i].index=i;
      	_li2[i].onmouseenter=function(){
      		for(var i=0;i<_span2.length;i++){
      			_span2[i].style.display="none"
      			_div2[i].style.display="none"
      		}
      		_span2[this.index].style.display="block";
      		_div2[this.index].style.display="block";
      	}
      	_li2[i].onmouseleave=function(){
      		_span2[this.index].style.display="none";
      		_div2[this.index].style.display="none";
      	}
    }
     
         
   	$("#top").click(function(){
   	  	$("body").animate({
   	  		"scrollTop":"0",
   	  	},50,"linear",function(){
   	  	})
	});
}
 // cookie
function cookie(){
     var _cookie = document.cookie;
     console.log(_cookie)
    if(_cookie.indexOf("uName")>=0){   // 判断cookie是否有uName
        var _arr=_cookie.split("; ");
        console.log(_arr)
        var uNames="";
        var uNames=_arr[0].match(/\w+/g)[1]
        console.log(uNames);
        $("#history_h").html("hi,"+uNames+",欢迎回来~")
    }
}

	     
	   