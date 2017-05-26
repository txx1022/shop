$(function(){
	  // 注册接口的正则判断
	  var _txt=$("#txt").val();  //事件中的value值不能声明，因为其为异步
	  var _psd=$("#psd").val();  //同上
	  var _surePsd=$("#sure_psd").val();
      var _txtRep2=/^1[3578]\d{9}$/g;  //当输入的电话号码格式正确时,前面加非！，为号码格式不正确
      var _psdRep=/^\w{6,20}$/g;  //当输入的密码是对的时候
          //点击文本框的的聚焦的失焦，判断是否让后面的提示语出现
    // 判断手机号的正则
	  $("#txt").focus(function(){ 
		  	$(".i1").css("display","block");
		  	$(".i11").css("display","none");
		    $(".i2").css("display","none");
	  });
	  $("#txt").blur(function(){    	  	 
         if($("#txt").val()==""){
	  		$(".i2").css("display","block");
	  		$(".i11").css("display","none");
	  		$(".i1").css("display","none");
	  	}else{
	  	    if(!(_txtRep2.test($("#txt").val()))&&!($("#txt").val()=="")){
				  		$(".i11").css("display","block");
				  		$(".i1").css("display","none");
				  		$(".i2").css("display","none");
	  	    }else{
			  		$(".none1").css("background","url(../img/u_shouye/duihao.png)")
			  		$(".i11").css("display","none");
				  	$(".i1").css("display","none");
				  	$(".i2").css("display","none");
	        }
	  	   }
	  })
	  //判断密码
	   $("#psd").focus(function(){   
	  	$(".i3").css("display","block");
	  	$(".i4").css("display","none");
	  	$(".i33").css("display","none");
	  })
	  $("#psd").blur(function(){
	  	if($("#psd").val()==""){
	  		$(".i4").css("display","block");
	  	    $(".i3").css("display","none");
	  	    $(".i33").css("display","none");
	  	}else{
	  		if(!(_psdRep.test($("#psd").val()))&&!($("#psd").val()=="")){
	  			$(".i4").css("display","none");
	  	        $(".i3").css("display","none");
	  	        $(".i33").css("display","block"); 
	  		}else{
	  			$(".none2").css("background","url(../img/u_shouye/duihao.png)")
	  			$(".i4").css("display","none");
	  	        $(".i3").css("display","none");
	  	        $(".i33").css("display","none"); 
	  		}
	  	}
	  })
	  //判断两次输入的密码是否一致
	   $("#sure_psd").focus(function(){
	   	if($("#sure_psd").val()==""){
	   		 $(".i5").css("display","block");
	  	    $(".i6").css("display","none");
	  	    $(".i55").css("display","none");
	   	}else{
		   	if($("#sure_psd").val()==$("#psd").val()){
		   		$(".none3").css("background","url(../img/u_shouye/duihao.png)")
		   		$(".i5").css("display","none");
		  	    $(".i6").css("display","none");
		  	    $(".i55").css("display","none");
		   	}else{
		   		$(".i5").css("display","none");
		  	    $(".i6").css("display","block");
		  	    $(".i55").css("display","none");
		   	}
	     }
	  })
	  $("#sure_psd").blur(function(){
	  	if($("#sure_psd").val()==""){
	   		$(".i5").css("display","none");
	  	    $(".i6").css("display","block");
	  	    $(".i55").css("display","none");
	   	}else{
		   	if($("#sure_psd").val()==$("#psd").val()){
		   		$(".none3").css("background","url(../img/u_shouye/duihao.png)")
		   		$(".i5").css("display","none");
		  	    $(".i6").css("display","none");
		  	    $(".i55").css("display","none");
		   	}else{
		   		$(".i5").css("display","none");
		  	    $(".i6").css("display","block");
		  	    $(".i55").css("display","none");
		   	}
	     }
	  })
         
      // 注册接口
   document.getElementById("sub").onclick=function() {
    if(document.getElementById("psd").value==document.getElementById("sure_psd").value) {
        ajaxRequest("post", "../PhpInterface/regist.php", true, {
            "account": document.getElementById("message").value,
            "secret": document.getElementById("psd").value,
            "mobile": document.getElementById("txt").value
        }, function (data){
            data = data.replace(/\s+/g, "");
            if (data == "0"){
                alert("注册失败！！");
            } else {
                alert("恭喜！！！成功！！！");
               //$("#zhuce").attr("href","shouye.html");
                  window.location.href="../html/login.html";
            }
        });
    }else{
        alert("两次输入的密码不一致，请重新输入！！");
        }
   }
 //点击随机出现二维码
 $("#change_one").click(function(){
 	var _random=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g",
 	              "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
 	               "x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M",
 	              "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 	var _test="";
 	for(var t=0;t<6;t++){
 		_test+=_random[parseInt(Math.random()*_random.length)];
 		
 	}
 	document.getElementById("testCode").innerHTML=_test;
 })
   
// 点击切换 电视注册和手机注册
	 $("#regist_phone").css("display","block");
	 $("#phone_1").css("background","#ff8400");
	 $("#phone_1").click(function(){
	 	$("#regist_phone").css("display","block");
	 	$("#regist_tv").css("display","none");
	 	 $("#phone_1").css("background","#ff8400");
	 	$("#tv_1").css("background","#fff")
	 })
	 $("#tv_1").click(function(){
	 	$("#regist_phone").css("display","none");
	 	$("#regist_tv").css("display","block")
	 	$("#tv_1").css("background","#ff8400");
	 	$("#phone_1").css("background","#fff");
	 })
 // 电视注册的  接口设置
  document.getElementById("sub1").onclick=function() {
    if(document.getElementById("psd1").value==document.getElementById("sure_psd1").value) {
            ajaxRequest("post1", "../PhpInterface/regist.php", true, {
                "account": document.getElementById("message1").value,
                "secret": document.getElementById("psd1").value,
                "mobile": document.getElementById("txt1").value
            }, function (data) {
                data = data.replace(/\s+/g, "");
                if (data == "0") {
                    alert("注册失败！！");
                } else {
                    alert("恭喜！！！成功！！！");
                    $("#zhuce").html(data);
                    $("#zhuce").attr("href","shouye.html");
                }
            });
        }else{
            alert("两次输入的密码不一致，请重新输入！！");
        }
   }
 //点击随机出现二维码
 $("#change_one1").click(function(){
 	var _random=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g",
 	              "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
 	               "x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M",
 	              "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 	var _test="";
 	for(var t=0;t<6;t++){
 		_test+=_random[parseInt(Math.random()*_random.length)];
 		
 	}
 	document.getElementById("testCode1").innerHTML=_test;
 })   
})
