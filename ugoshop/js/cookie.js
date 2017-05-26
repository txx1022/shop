 $(function(){
	
   function createItem(){
   	
   	 
   	 var Data=[];
   	 
   	 
   	  $(".cookie_foot").append(
          '<div>'+
         	'<p><span>共<span id="jian">'+0+'</span>件商品</span><span id="jine">商品金额:</span><span id="zongji">'+0+'</span></p>'+
         	'<p>优惠金额<span id="youhui">0</span></p>'+
         	'<p>实付金额<span id="shifu"></span></p>'+
          '</div>'       
         )
   	 
   	 $.get("../json/cookie.json",function(data){
   	 	Data=data
   	 	//console.log(Data);   此处为json的数据
		var _cookie=Cookie.readCookie(); //1=1;2=1;3=1
		var _data=_cookie.split(/;\s*/g); //split把字符串分隔成数组 ["1=1","2=1","3=1"]
		//console.log(_data.length);     此处输出的位数组的长度  3
		var _split=null;
		// 此处为点添加元素
		for(var i=0;i<_data.length;i++){
		  _split=_data[i].split("=")   
//		console.log(_split);      //此处把数组里面的数据分割开来  ["1","1"] ["2","1"] ["3","1"]  为什么数字带引号？
		  if(Data[_split[0]]){  //console.log(Data[_split[0]]);  此处为json里面的第一个
		  	  $("#list_body").append(
		  	  	'<ul class="shoplist">'+
				'<li style="width:54px;"><input type="checkbox" name="check" class="select"  id="select" value="" /></li>'+
				'<li><img src="'+Data[_split[0]].address+'" /></li>'+
				'<li>'+Data[_split[0]].name+'</li>'+
				'<li id="danjia" class="danjia">'+Data[_split[0]].price+'</li>'+
				'<li><b id="substr" class="'+_split[0]+'">-</b><input class="num" type="text" value="'+_split[1]+'" id="num'+_split[0]+'"/><b id="add" class="'+_split[0]+'">+</b></li>'+
				'<li id="all"><input class="all" type="text" name="" id="price" value="'+(parseInt(Data[_split[0]].price.split('￥')[1]) * parseInt(_split[1])) +'"/></li>'+
				'<li><span id="delate" class="'+_split[0]+'">删除</span></li>'+
			'</u>'
		  	  )
		  }
		}
		// 此处为 input按钮的功能
		function inpute(){
			//此处点击input全选，实现全选功能
			var flag=false;
			var num=0;
			 $("#check").click(function(){	
			 	if(flag==false){
			 		flag=true;
			 		$("#list_body input").prop('checked','true')
			 	}else{
			 		flag=false;
			 		$("#list_body input").prop('checked','')
			 	}
			 	//当点击 全选功能的时候 实现单价的数量的 计算
			 	var allpirce= 0;
	 			var allnum =0;
			 	var checkedList = $("#list_body .select:checked")
				for( var y = 0 ; y < checkedList.length; y ++  ){
//			 		 console.log(checkedList[y].parents('ul').find('.num'))	
				  var apirce = checkedList[y].parentElement.parentElement.children[3].innerText.split('￥')[1]
				  var anum = checkedList[y].parentElement.parentElement.children[4].children[1].value;
					allnum = parseInt(allnum)+parseInt(anum) 
					allpirce = allpirce + (anum * apirce)
		 		}
//		 		console.log(allnum)
			 	$('.cookie_foot').find('#jian').html(allnum)
			 	$('.cookie_foot').find('#zongji').html(allpirce)
			 	$('.cookie_foot').find('#shifu').html(allpirce)
     
			 }) 
			 
			//input框的不全选功能
			 $("#list_body .select").click(function(){
			 	var allpirce= 0;
	 			var allnum =0;
			 	var checkedList = $("#list_body .select:checked")
		 		for( var y = 0 ; y < checkedList.length; y ++  ){
//			 		 console.log(checkedList[y].parents('ul').find('.num'))	
					var apirce = checkedList[y].parentElement.parentElement.children[3].innerText.split('￥')[1]
					var anum = checkedList[y].parentElement.parentElement.children[4].children[1].value;
					allnum = parseInt(allnum)+parseInt(anum) 
					allpirce = allpirce + (anum * apirce)
		 		}
//		 		console.log(allnum)
			 	$('.cookie_foot').find('#jian').html(allnum)
			 	$('.cookie_foot').find('#zongji').html(allpirce)
			 	$('.cookie_foot').find('#shifu').html(allpirce)
			 	
//			 	console.log(allpirce)
//				console.log( $("#list_body .select"))
			 	if($(this).prop('checked')==true){
			 		num++	
			 	}
			 	if($(this).prop('checked')==false){
			 		num--
			 	}
			 	if(num==$(".select").length){ //此处不能用id名，因为id名只有一个
			 	   $("#check").prop('checked','true');
			 	   flag=true;
			 	}else{
			 		$("#check").prop('checked','');
			 		flag=false;
			 	}
			 })
		}
		inpute();
		// 删除功能
		function delate(){
			for(var d=0;d<$("#list_body span").length;d++){
				$("#list_body span").eq(d).click(function(){
					if(window.confirm("是否删除")){
						Cookie.deleteCookie(this.className,"/");
						 window.location.reload();
						  
					}
				})
			}
		}
		delate();
		//数量的增加与删除
	    // 结算功能的实现
		var _count=document.getElementById("danjia").innerHTML;
		var _fenge=_count.split("￥");
        var _price=$("#price").val(); 
   function _number(){
        var b=$("b");
        b.click(function(e){
        	console.log($(this).text())
        	if($(this).text() == '+'){
        		var  aprice =$(this).parents('ul').find('.danjia').text().split('￥')[1]
	        	var tnum = $(this).parents('ul').find('.num').val()
	        	$(this).parents('ul').find('.num').val(++tnum)
	        	$(this).parents('ul').find('.all').val(tnum*aprice)        	
        	}
        	if($(this).text() == '-'){
        		var  aprice =$(this).parents('ul').find('.danjia').text().split('￥')[1]
	        	var tnum = $(this).parents('ul').find('.num').val()
	        	tnum = tnum-1
	        	if(tnum < 1) {
	        		alert('不能再减了！')
	        		return false
	        	}
	        	$(this).parents('ul').find('.num').val(tnum)
	        	$(this).parents('ul').find('.all').val(tnum*aprice)  
        	}
        	var _num = tnum
        	Cookie.setCookie(this.className.match(/\d+/g)[0],_num,"/",new Date(new Date().getTime()+7*24*3600*1000));
        })       
     
	}
   	  _number();
   })

}
   createItem()
})