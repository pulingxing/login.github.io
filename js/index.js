/*登录方式切换*/
$(function(){
	$(".account-login").on("click",function(){
		$(".account-login").css("backgroundColor","#ffffff");
		$(".QR-login").css("backgroundColor","#145388");
		$(".login-info").css("display","block");
		$(".QR").css("display","none");
	});
	$(".QR-login").on("click",function(){
		$(".QR-login").css("backgroundColor","#ffffff");
		$(".account-login").css("backgroundColor","#145388");
		$(".login-info").css("display","none");
		$(".QR").css("display","block");		
	})
});
/*固定屏幕高度为当前设备屏幕高度*/
height();
function height(){
	total = document.documentElement.clientHeight;
	var mainHeight = document.getElementById("main-box");
	mainHeight.style.height=total+"px";
}