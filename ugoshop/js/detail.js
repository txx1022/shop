$(function(){
	// 放大镜的图片的添加
	var _data=[];
	$.get("../json/lunbotu.json",function(data){
	  _data=data;
	  console.log(_data["img"][0])
	  $("#bigGlass_l").append('<div class="bigGlass_ltop"></div>'+'<div class="show"><div class="bigGlass_lmiddle"></div></div>'+'<div class="bigGlass_lbottom"></div>')
	for(var i=0;i<6;i++){
	    $(".bigGlass_lmiddle").append('<img src="../img/u_shouye/big'+_data["img"][i]+'.jpg" />');
	}
	 $(".bigGlass_ltop").append('<img src="../img/u_shouye/big'+_data["img"][0]+'.jpg" />');
	 $("#out").append('<img src="../img/u_shouye/big'+_data["img"][0]+'.jpg" />');
	    $(".bigGlass_ltop").append('<div id="move"></div>');
        $(".bigGlass_lmiddle").append("<span></span><span></span>");
        $(".bigGlass_lmiddle span").eq(0).html("&lt;").css("left","0");
	    $(".bigGlass_lmiddle span").eq(1).html("&gt;").css("right","0");
	    $(".bigGlass_lbottom").append("<span></span><span></span><span></span>");
	    $(".bigGlass_lbottom span").eq(0).css({
	    	"float":"left",
	    	"color":"#adadad",
	    	"margin-right":"102px",
	    	"font-size":"12px"
	    }).html("商品货号：JYYWL509B611467");
	   $(".bigGlass_lbottom span").eq(1).append('<i class="iconfont icon-fenxiang"></i>').css({
	   	  "display":"inline-block",
	   	  "margin-right":"19px",
	   	  "font-size":"12px",
	   	  "color":"#333"
	   }).html("分享");
	    $(".bigGlass_lbottom span").eq(2).append('<i class="iconfont icon-guanzhu"></i>').html("已关注").css({
	    	"font-size":"12px",
	    	"color":"#333"
	    })
//	轮播图 点击切换大图图片
  function change(){
  	//点击切换图片的另一种方法
//	var index=null;
//  $(".bigGlass_lmiddle img").click(function(e){
//      index=$(e.target).index();
// 	    $(".bigGlass_ltop img").eq(index).fadeIn().siblings().fadeOut();
// 	    $("#out img").eq(index).fadeIn().siblings().fadeOut();
// 	    $(".bigGlass_lmiddle img").eq(index).css("border","1px solid red").siblings().css("border","none");
//  }) 
       $(".bigGlass_lmiddle img").click(function(e){
            $(".bigGlass_ltop img")[0].src=$(this)[0].src;
            $("#out img")[0].src=$(this)[0].src;
            $(this).css("borderColor","red").siblings().css("borderColor","#ededed")
       })
   }
change();	 
// 放大镜
  function show(){
  	 $(".bigGlass_ltop").mouseenter(function(){
     	$("#move,#out").css("display","block");
    });
    $(".bigGlass_ltop").mouseleave(function(){
     	$("#move,#out").css("display","none");
     })
  	
  }
  function expand(){
  	  show();
     $("#move").mousemove(function(e){
     	e=e||window.event;
     	// 放大镜计算的第一种方法
//   	var _top=document.documentElement.scrollTop||document.body.scrollTop;
//	    var _left=document.documentElement.scrollLeft||document.body.scrollLeft;   	 
//    
//   	if(e.clientX-_left>180&&e.clientX-_left<480){
//   		this.style.left=e.clientX-$(".bigGlass_ltop").offset().left-50+"px";
//   		$("#out img")[0].style.left=-4*(e.clientX-$(".bigGlass_ltop").offset().left-50)+"px";
//   	} 
//      console.log(Math.abs(_top-e.clientY));
//   	if(Math.abs(_top-e.clientY)>356&&Math.abs(_top-e.clientY)<656){		
//   		this.style.top=e.clientY-$(".bigGlass_ltop").offset().top-50+"px";
//   		$("#out img")[0].style.top=-4*(e.clientY-$(".bigGlass_ltop").offset().top-50)+"px";
//   	}

    //放大镜计算的第二种方法
      var otop=document.documentElement.scrollTop||document.body.scrollTop;
	  var oleft=document.documentElement.scrollLeft||document.body.scrollLeft;
      var _left=e.clientX-$(".bigGlass_ltop").offset().left-50+oleft;
      var _top=e.clientY-$(".bigGlass_ltop").offset().top-50+otop;
      if(_left<=0){
      	_left=0
      }if(_left>=300){
      	_left=300
      }
      if(_top<=0){
      	_top=0
      }if(_top>=300){
      	_top=300
      }
      this.style.top=_top+"px";
      $("#out img")[0].style.left=-4*_left+"px";
      this.style.left=_left+"px";
      $("#out img")[0].style.top=-4*_top+"px";
     })
  }
  expand();
  })
  
  // 商品详情的字符串拼接
  var _num=[];
  $.get("../json/lunbotu.json",function(num){
  	_num=num;
   
	function detail(){
			console.log(_num.ols.size1);
	   $("#bigGlass_r").append(
	   	    '<p id="model">'+num.ols.model+'</p>'+
 			'<p id="name">'+num.ols.name+'</p>'+
 			'<p id="detail">'+num.ols.detail+'</p>'+
 			'<div id="bigPrice">'+
 				'<p id="price_p"><span id="price_span"></span><span id="price">'+_num.ols.price+'</span></p>'+
 				'<p id="discount_p"><span id="discount_span"></span><span id="discount_by"></span><span id="discount_over">'+num.ols.discount+'</span></p>'+
 			'</div>'+
 			'<div id="beijing_out">'+
 				'<p id="beijing_p"><span id="send"></span><option id="qu">'+_num.ols.send+'</option><span id="youhuo"></span></p>'+
 				'<div id="beijin_xia">'+
 					'<div id="city">'+
 						'<span></span>'+
 						'<span></span>'+
 						'<span></span>'+
 					'</div>'+
 					'<div id="city_xia">'+
 						'<div></div>'+
 						'<div></div>'+
 						'<div></div>'+
 					'</div>'+
 					'<p id="x"></p>'+
 				'</div>'+
 			'</div>'+
 			'<div id="color_p">'+
 				'<span id="color_span"></span>'+
 				'<img id="img" src="'+_num.detailSrc+'"/>'+
 			    '<span id="duihao"></span>'+
 			'</div>'+
 			'<div id="size_p">'+
 				'<span id="size_span"></span>'+
 				'<span id="xl">'+_num.ols.size1+'</span>'+
 				'<span id="l">'+_num.ols.size2+'</span>'+
 				'<span id="m">'+_num.ols.size3+'</span>'+
 				'<span id="size_chart"></span>'+
 			'</div>'+
 			'<div id="num_p">'+
 				'<span id="num_span"></span>'+
 				'<span id="num_reduce"></span>'+
 				'<span id="num"></span>'+
 				'<span id="num_add"></span>'+
 			'</div>'+
 			'<input type="button" name="add_chart" id="add_chart" value="加入购物车" />'
	   )
	   $("#price_span").html("价格");
	   $("#discount_span").html("优惠");
	   $("#discount_by").html("包邮");
	   $("#send").html("送至");
	   $("#youhuo").html("有货");
	   $("#color_span").html("颜色");
	   $("#size_span").html("尺码");
	   $("#size_chart").html("尺码表");
	   $("#num_span").html("数量");
	   $("#num_reduce").html("-");
	   $("#num_add").html("+"); 
	   $("#add_chart").html("加入购物车");
	   $("#city span").eq(0).html("北京");
	   $("#city span").eq(1).html("北京");
	   $("#city span").eq(2).html("东城区");
	   $("#num").html("1");
	   //添加城市
	   for(var b=0;b<34;b++){
	   	$("#city_xia div").eq(0).append(
	   		'<a href="###">'+_num["city"][b]+'</a>'
	   	)
	   }
	   $("#city_xia div").eq(1).html("北京")
	   for(var f=0;f<18;f++){
	   	$("#city_xia div").eq(2).append(
	   		'<a href="###">'+_num["town"][f]+'</a>'
	   	)
	   }
	   //点击切换城市
	   var index=null;
	   $("#city span").click(function(e){
	   	index=$(e.target).index();
	   	$("#city_xia div").eq(index).fadeIn().siblings().fadeOut();
	   	$("#city span").eq(index).css("border-bottom","none").siblings().css("border-bottom","1px solid #ccc")
	   })
	   
	   $("#beijing_out").mouseenter(function(){
	   	   $("#beijin_xia").css("display","block")
	   })
	   $("#x").click(function(){
	   	  $("#beijin_xia").css("display","none")
	   })
	   // img选择的 时候加上边框
	   $("#img").click(function(){
	   	  $("#img").css("borderColor","red");
	   	  $("#duihao").css("display","block")
	   })
	   //点击选择尺码
	   $("#xl").click(function(){
	   	var _id1=$(this).get(0).id
	   	$(this).css("border-color","red")
	   	$("#l").css("border-color","#ccc")
	    $("#m").css("border-color","#ccc")
	   })
	   $("#l").click(function(){
	   	var _id2=$(this).get(0).id
	   	$(this).css("border-color","red")
	   	$("#xl").css("border-color","#ccc")
	    $("#m").css("border-color","#ccc")
	   })
	   $("#m").click(function(){
	   	var _id3=$(this).get(0).id
	   	$(this).css("border-color","red")
	   	$("#xl").css("border-color","#ccc")
	    $("#l").css("border-color","#ccc")
	   })
	   //点击数量加或者减
	   $("#num_add").click(function(){
	   	  document.getElementById("num").innerHTML==20?1:document.getElementById("num").innerHTML++;
	   })
	   $("#num_reduce").click(function(){
	   	  document.getElementById("num").innerHTML==1?1:document.getElementById("num").innerHTML--;
	   })
	   // 点击购物车设置cookie
	   $("#add_chart").click(function(){
	   	 $.get("../json/cookie.json",function(product){
	   	 	for(var k in product){
//	   	 		console.log(k);
                var _number=document.getElementById("num").innerHTML;
	   	 		Cookie.setCookie(k,_number,"/",new Date(new Date().getTime()+7*24*3600*1000))
	   	 	}
	   	 })
	   })
}
	detail();
  })
  
	
	
	
	
	
})
