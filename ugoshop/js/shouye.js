   // 轮播图
 $(function(){
            var _pic=[];
           //添加图片
            $.get("../json/lunbotu.json",function(pic){
            	_pic=pic;
            	for(var k=0;k<_pic["img"].length;k++){  
            		 var _lunbotu=_pic["img"][k];
            		 var _text=_pic["tex"][k+1];
            		//console.log(_text.name);
            		$("#lunbotuTop_left").append('<a href="###"><img src="../img/u_shouye/'+"_"+_lunbotu+'.jpg"/></a>');
            		$("#lunbotuTop_right").append('<div><a href="###"><p>'+_text.name+'</p><p>'+_text.detail+'</p><p>'+_text.price+'</p><p><span></span>'+_text.user+'</p><p>'+_text.usershuo+'</p></a></div>')
            		$("#lunbotuBottom").append('<a href="###"><span></span><img src="../img/u_shouye/'+"_"+_lunbotu+'.jpg"/></a>');
            	}  
            })	
              	 // 点击切换
            	  var index=0;
            	  	$("#lunbotuTop_left a").eq(0).fadeIn();
            	  	$("#lunbotuBottom a").eq(0).fadeIn();
            	  	var timer=null;
            	  	
                 function change(){	
                 		index+=1;
                 		 if(index>=$("#lunbotuTop_left a").length){
			             	index=0;
			           }
            	     //  console.log(index)
			           	$("#lunbotuTop_left a").eq(index).fadeIn().siblings().fadeOut();
			           	$("#lunbotuTop_right div").eq(index).fadeIn().siblings().fadeOut();
			          // 	console.log( $("$("#lunbotuBottom span"):parent") )
			           // $("#lunbotuBottom span").eq(index).css("display","block").$("#lunbotuBottom span:parent span").sbliings().css("display","none");
			            $("#lunbotuBottom a").eq(index).css("border-top","1px solid red").siblings().css("border-top","none"); 
			           }
                     timer=setInterval(change,2000)
	                $(".lunbotuAfter_l").mouseenter(function(){
	                	clearInterval(timer);
	                	$("#lunbotuTopClick_left").fadeIn();
	                	$("#lunbotuTopClick_right").fadeIn()
	                	
	                })
	                $(".lunbotuAfter_l").mouseleave(function(){
	                	$("#lunbotuTopClick_left").fadeOut();
	                	$("#lunbotuTopClick_right").fadeOut();
	                	timer=setInterval(change,2000)
	                })
	                $("#lunbotuTopClick_right").click(function(){
	                	change();     
	                })
	               $("#lunbotuTopClick_left").click(function(){
	                	change(); 
	                }) 
	                $("#lunbotuBottom img").click(function(){
	                	clearInterval(timer);
	                	change(); 
	                })
//        无缝滚动   这不用看  是动态生成标签
                 var _scroll=[];
                 $.get("../json/lunbotu.json",function(scroll){
                 	_scroll=scroll;
                 	for(var s=0;s<_scroll["scroll"].length;s++){
                 		//console.log(_scroll["scroll"][s])
                 		$("#inner24").append('<div><a href="###"><img src="../img/u_shouye/scroll'+_scroll["scroll"][s]+'.jpg" /></a><span></span><div>') 
                 	} 
                 })
                 //  从这开始无缝滚动
                 var myTimer={} ;
                 var _inner24=document.getElementById("inner24");
              //   console.log(_inner24)
                 //点击左键
                 $("#scroll_left").click(function(){
                 	myTimer.timer2=setInterval(function(){
                 		_inner24.style.left=_inner24.offsetLeft-274+"px";
                 		if(Math.floor(Math.abs(_inner24.offsetLeft%274))==0){               
                 			clearInterval(myTimer.timer2);
                 		}
                 		if(_inner24.offsetLeft<-3014){
                 			_inner24.style.left=0;
                 		}
                 	},500)
                 })
                 //点击右键
                $("#scroll_right").click(function(){
                 	myTimer.timer2=setInterval(function(){
                 		_inner24.style.left=_inner24.offsetLeft+274+"px";
                 		if(Math.floor(Math.abs(_inner24.offsetLeft%274))==0){               
                 			clearInterval(myTimer.timer2);
                 		}
                 		if(_inner24.offsetLeft==0){
                 			_inner24.style.left=-3014+"px";
                 		}
                 	},500)
                 })
           //品牌精选 促销
            var _pic=[];
           //添加图片
            $.get("../json/lunbotu.json",function(pic){
            	_pic=pic;
            	for(var k=0;k<4;k++){  
            		 var _lunbotu=_pic["img"][k];
            		 var _text=_pic["tex"][k+1];
            		//console.log(_text.name);
            		$("#sale_pic").append('<a href="###"><img src="../img/u_shouye/sale'+_lunbotu+'.jpg"/></a>'); 
            	}
            })
         // 产品列表  pro  瀑布流	
         	 var _s=1,_e=28;
         	 creatElement(_s,_e)
         	 function creatElement(s,e){
         		  var _pro=[];
 				    $.get("../json/product.json",function(pro){
			           _pro=pro;
//			           var size=0;
//			            for(var k in pro){size++} //次循环为空循环，目的是为了去取json里面的长度
			         	for(var p=s;p<e;p++){
			         	$(".pro").append('<div class="big"><a href="../html/detail.html"><div class="pro_big"><img src="'+_pro[p].img+'"/><p class="name">'+_pro[p].name+'</p><p><span>'+_pro[p].price+'</span><span><i>'+_pro[p].people+'</i>已购买</span></p></div><div class="space" style="background:#f8f8f8;height:30px""></div></a><div></div></div>'); 
			         	}
			         })
		          }
            function isComplate(){
            	var _o_h=document.documentElement.offsetHeight||document.body.offsetHeight;
            	var _c_h=document.documentElement.clientHeight||document.body.clientHeight
            	var _s_t=document.documentElement.scrollTop||document.body.scrollTop;
            	//console.log(_s_t);
            	if(_o_h<=_c_h+_s_t){
            		_s=_e+1;
            		_e=_e+30;
            		creatElement(_s,_e);
            	}
            }
       	 window.onscroll=function(){
       	 	isComplate();
       	 }
       	
        $(".big").mouseenter(function(){
        	$(".big").css("border","1px solid red")
        })
       
})