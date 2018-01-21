$(function(){
	//下载点击事件
	$('#download_btn').click(function(){
		$('.popup_box').show();
	});
	//弹框关闭点击事件
	$('.close').click(function(){
		$('.popup_box').hide();
	});
	//判断屏幕宽度，当宽度小于1024时改变title的显示方式
	if (window.innerWidth >= 1024){
		$('.title_pc').show();
	}else{
		$('.title_wap').show();
		$('.section1').css('backgroundImage','url(./img/bg_wap.png)');
	}
	//针对首屏的logo居中
	$('.section1_cnt').css('marginTop', -$('.section1_cnt').innerHeight()/2);
	//适配简易版的全屏
	if (window.innerHeight > 568){
		$('.whole_screen').css('height',window.innerHeight - $('.footer').innerHeight());
	}
});