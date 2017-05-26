$(function(){
	$(".allList").find("i").eq(0).css("color","#fff");
	$(".allList").find("i").eq(1).css("color","red");
	$(".allList").find("i").eq(2).css("color","#23aaff");
	$(".allList").find("i").eq(3).css("color","#fd7fa6");
	$(".allList").find("i").eq(4).css("color","#E66A05");
	$(".allList").find("i").eq(5).css("color","#ff3d74");
	$(".allList").find("dt").eq(0).css("background","#e50038");
		$(".allList dl").mouseenter(function(){
			$(this).children("dt").css("background","#e50038");
			$(this).children("dt").children("i").css("color","#fff");
		})
		$(".allList dl").mouseleave(function(){
			$(".allList dt").css("background","#fff");
			$(".dt1").css("background","#e50038")
			$(".i1").css("color","#fff");
			$(".i2").css("color","red");
			$(".i3").css("color","#23aaff");
			$(".i4").css("color","#fd7fa6");
		    $(".i5").css("color","#E66A05");
			$(".i6").css("color","#ff3d74");
		})
		// 以下为瀑布流 用的弹性盒子的布局
		var s=1,e=9;
		creatElement(s,e);
	function creatElement(_s,_e){
		var _data=[];
		$.get("../json/list_fenye.json",function(data){
			_data=data;
			for(var i=_s;i<_e+1;i++){
			$("#list_pro").append('<div class="show"><div class="inner"><img class="picture" src="'+data[i]["img"]+'"/><p>'+data[i]["name"]+'</p><p><span class="price">'+data[i]["price"]+'</span><span class="pinglun">'+data[i]["pinglun"]+'<span class="a">'+data[i]["a"]+'</span>'+data[i]["tiao"]+'</span></p></div><img class="chun" src="../img/list/chun.jpg"><div class="abso"><p class="tv_s"><span class="discount">'+data[i]["discount"]+'</span><span class="free">'+data[i]["free"]+'</span><span class="ji_big"><span class="ji"></span><span>'+data[i]["jifen"]+'</span></span></p><div class="huiyuan"><p class="huiyuan_p"></p><p class="comment">'+data[i]["comment"]+'</p></div></div></div>')
		         $(".ji").html("积")
		         $(".huiyuan_p").html("会员评价")
		    }
			$(".show").mouseenter(function(){
		         $(this).find($(".abso")).toggle("normal","linear").css("border","2px solid red");
		         $(this).css("border","2px solid red");  
			})
			$(".show").mouseleave(function(){
				 $(this).find($(".abso")).toggle("normal","linear");
				  $(this).css("border","1px solid #666")
			})
		})
	}
   function iscomplite(){
   	var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
   	var _clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
   	var _offsetHeight=document.documentElement.offsetHeight||document.body.offsetHeight;
   	if(_offsetHeight<=_scrollTop+_clientHeight&&e<27){ //不要忘记写等于号，等于号是个临界点，不判断的话会失效
   		s=e+1;
   		e=e+9;
   		creatElement(s,e)
   	}
   }
   window.onscroll=function(){
		iscomplite();
   }
	// 创建分页的按钮
	function creatButton(n){
		var _span=null;
		var _button=document.getElementById("pageDivide")
		for(var i=0;i<n;i++){
			_span= document.createElement("span");
			_span.innerText=i+1;
			_button.appendChild(_span);
		}
		buttonEvent(_button);
		console.log(_button.children)
		
	}
	function changeButtonText(_button,_current){
		if(_current===_button.children[_button.children.length-1]){
			if(parseInt(_current.innerText)<12){
				for( var i=0;i<_button.children.length;i++){
					_button.children[i].innerText=parseInt(_current.innerText)-2+i;
				}
			}
		}
        if(_current===_button.children[0]){
        	var _value=parseInt(_current.innerText);
        	if(_value-2>0){
        		for(var m=0;m<_button.children.length;m++){	
        			_button.children[m].innerText=_value-2+m;
        			_button.children[m].style.display="block";
        		}
        	}
        }
	}
    function buttonEvent(_button){
	    for(var j=0;j<_button.children.length;j++){
	    	_button.children[j].onclick=function(){
	       var _list_pro=document.getElementById("list_pro")
	       _list_pro.innerHTML="";
	    	changeButtonText(_button,this);
	    	creatElement(s,e)
	    	console.log(this)
	    	}
	    }
    }
    creatButton(5)
})
