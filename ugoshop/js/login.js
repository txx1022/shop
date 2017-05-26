$(function(){
	 var _text=$("#text").val();  //事件中的value值不能声明，因为其为异步
	 var _psd=$("#psd").val();
	 var _textRep=/\^\w{2,20}$/g;  //判断用户名的格式
	 var _pswRep=/^\w{6,20}$/g;  //判断密码的格式
	 $("#text").blur(function(){
	 	if( $("#text").val()==""){
	 		$(".i1").css("display","block");
	 		$(".i2").css("display","none")
	 		$(".i3").css("display","none")
	 	} 
	 
	 })
	 $("#submit").click(function(){
	 	if( $("#psd").val()==""&&!(_pswRep.test($("#psd").val()))){
	 		$(".i3").css("display","block");
	 		$(".i1").css("display","block");
	 		$(".i2").css("display","none")
	 	}
           //else{
//	 		if($("#psd").val()==""&&$("#text").val()==""){
//	 			alert(0)
//	 		}
//	 	}
	 })
	//判断数据库里面是否有没有的接口
	$("#submit").click(function(){
 		 		   ajaxRequest("post","../phpInterface/login.php",true,{
 		 		   	"user":$("#text").val(),
 		 		   	"pwd":$("#psd").val(),
 		 		   },function(data){
 		 		   	 data=data.replace(/\s+/g,"");
 		 		   	 if(data!="0"){  //0必须加引号
   		 		   	 	 if ($("#checkBox")[0]["checked"]) {
                      document.cookie = "uName=" + $("#text").val() + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600 * 1000) + ";";
                      document.cookie = "pwd=" + $("#psd").val() + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600 * 1000) + ";";
                  }
 		 		   	 	window.location.href="../html/shouye.html"
 		 		   	 	
 		 		   	 }else{
 		 		   	 	alert("用户名或者密码错误~~")
 		 		   	 }
 		 		   });
 		 		})
})
