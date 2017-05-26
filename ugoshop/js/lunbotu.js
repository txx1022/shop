
function lunbotumain(){
                	// 购物车点击
                var _shopping_car_xia=document.getElementById("shopping_car_xia");
		    	var _car=document.getElementById("car");
              	mouseOver(_car,_shopping_car_xia);   	      
//          //产品目录
            //$.get()取代了复杂的$.ajax
            var _data=[];
            $.get("../json/head.json",function(data){
            	_data=data;
            	for(var j=0;j<_data.length;j++){	 
          	 $("ul").append('<li>'+'<a href="../html/list.html" target="_blank">'+_data[j][j]+'</a>'+'</li>');
            } 
              $("ul li").last().addClass("divide")
             $("ul li").eq(5).children("a").click(function(){
             	$("ul li").children("a").attr({"href":"../html/list.html"})
             }) 
              //  列表详细介绍 的创建的获取数据
             $("li").last().addClass("women").append('<div class="box"></div>');
             var _list=[];
             $.get("../json/list.json",function(lis){
             	_list=lis;
             for(var s=0;s<_list.length;s++){
             		var _div=$("<div></div>");
             	    var _a=$('<a href="###">'+_list[s].name+'</a>');
             	    var _l=$("<ul></ul>");
              for(var h=0;h<_list[s]["children"].length;h++){
             		var _li=$('<li>'+_list[s]["children"][h]+'</li>')    
             	     _l.append(_li);
              }
                  _div.append(_a);
                  _div.append(_l);
                  $(".box").append(_div);
             	}
             // 给产品列表添加iconfont
              $(".box a").eq(0).append('<i class="iconfont icon-icon"></i>');
              $(".box a").eq(1).append('<i class="iconfont icon-meishi"></i>');
              $(".box a").eq(2).append('<i class="iconfont icon-jiaju"></i>');
              $(".box a").eq(3).append('<i class="iconfont icon-fushixiebao"></i>');
              $(".box a").eq(4).append('<i class="iconfont icon-meizhuang"></i>');
              $(".box a").eq(5).append('<i class="iconfont icon-zhubao-"></i>');
             })
             $(".divide").mouseenter(function(){
             	$(".box").css("display","block")
             });
              $(".divide").mouseleave(function(){
             	$(".box").css("display","none")
             })
           })
            //吸顶
         $(window).scroll(function(){
             var _textScrolltop=document.documentElement.scrollTop||document.body.scrollTop;
	           if(_textScrolltop>135){
	             	$(".text").css({"position":"fixed","top":"0","z-index":"9","margin-left":"325px"})
	           }if( _textScrolltop<135&&_textScrolltop>0){
	           	  $(".text").css( {"position":"","margin-left":"325px"})
	           }
            })
            
            
//         轮播图 
           //添加图片
           var _pic=[];
            $.get("../json/lunbotu.json",function(pic){
            	_pic=pic;                     
            	for(var k=0;k<_pic["img"].length-3;k++){  
            		 var _lunbotu=_pic["img"][k];
            		// console.log(_lunbotu);
            		$("#bigPic").append('<a href="###"><img src="../img/u_shouye/'+_lunbotu+'.jpg"/></a>');
            		$("#circle").append("<span></span>");
            
            	}
            	  //点击切换
            	   var index=0;
            	  	$("#bigPic a").eq(0).fadeIn();
            	  	$("#circle span").eq(0).css({"background":"#f70800"})
            	  	var timer=null;
            	  	var lunbotime={};
            	  	lunbotime.time=setInterval(chan,2000)
                 function chan(){	
                 		index+=1;
                 		 if(index>=$("#bigPic a").length){
			             	index=0;
			           }
			           	$("#bigPic a").eq(index).fadeIn().siblings().fadeOut();
			           	$("#circle span").eq(index).css({"background":"#f70800"}).siblings().css({"background":"#9d9991"})
			           } 
                $(".lunbotu").mouseenter(function(ev){ 
                	clearInterval(lunbotime.time);
                	$("#click_left").fadeIn();
                	$("#click_right").fadeIn()
                	
                })
                $(".lunbotu").mouseleave(function(){
                	
                	$("#click_left").fadeOut();
                	$("#click_right").fadeOut();
                	lunbotime.time=setInterval(chan,2000)
                })
                $("#click_right").click(function(){
                	chan()
                })
               $("#click_left").click(function(){
               	index--
                	if(index<0){
                	    index=3;
                	}
                	$("#bigPic a").eq(index).fadeIn().siblings().fadeOut();
			        $("#circle span").eq(index).css({"background":"#f70800"}).siblings().css({"background":"#9d9991"})
                }) 
                $("#circle span").click(function(e){
                	 index=$(e.target).index();
                	 $("#bigPic a").eq(index).fadeIn().siblings().fadeOut();
                	 $("#circle span").eq(index).css({"background":"#f70800"}).siblings().css({"background":"#9d9991"})
                })
            }) 
  } 
  