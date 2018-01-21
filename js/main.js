$(function(){
	//下载点击事件
	$('#dowloa_btn').click(function(){
		$('.popupBox').show();
	});
	//弹框关闭点击事件
	$('.close').click(function(){
		$('.popupBox').hide();
	});
	//判断屏幕宽度，当宽度小于1024时改变title的显示方式
	var innerWidth = window.innerWidth;
	if (innerWidth >= 1024){
		$('.title_pc').show();
		$('.title_wap').hide();
	}else{
		$('.title_pc').hide();
		$('.title_wap').show();
		$('.main').css('backgroundImage','url(./img/bg_wap.png)');
	}
});