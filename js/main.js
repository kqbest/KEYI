//首屏背景加载完成之后才进入动画	
if (window.innerWidth >= 1024){
	$('body').append('<img id="img1" class="none" src="img/bg.jpg" alt="" width="0" height="0" />');
	$('#img1').load('img/bg.jpg',function() {
		$('.section1').css('backgroundImage','url(img/bg.jpg)');
		$('#img1').remove();
		$('.logo').addClass('animation1');
		$('.section1_title').addClass('animation2');
		$('.section1_description').addClass('animation2');
		$('.section1_download').addClass('animation2');
	});
}else{
	$('body').append('<img id="img2" class="none" src="img/bg_wap.jpg" alt="" width="0" height="0" />');
	$('#img2').load('img/bg_wap.jpg',function() {
		$('.section1').css('backgroundImage','url(img/bg_wap.jpg)');
		$('#img2').remove();
		$('.logo').addClass('animation1');
		$('.section1_title').addClass('animation2');
		$('.section1_description').addClass('animation2');
		$('.section1_download').addClass('animation2');
	});
}

//判断屏幕宽度，当宽度小于1024时改变title的显示方式
if (window.innerWidth >= 1024){
	$('.title_pc').show();
}else{
	$('.title_wap').show();
	$('.anchor1').css({backgroundImage:'url(./img/bg_wap1.jpg)',with:'100%'});
	$('.anchor4').css({backgroundImage:'url(./img/bg_wap2.jpg)',with:'100%'});
}

//针对首屏的logo居中
$('.section1_cnt').css('marginTop', -$('.section1_cnt').innerHeight()/2);

//适配简易版的全屏
if (window.innerHeight > 568){
	$('.whole_screen').css('height',window.innerHeight - $('.footer').innerHeight());
}

//根据鼠标滚动距离执行动画
var innerHeight = window.innerHeight;
var timer = null;
var c_start = 0;
$('.main').scroll(function(){
	//函数节流
	var c_cur = new Date().getTime();
    if (c_start == 0) {
    	c_start = c_cur;
    }
    clearTimeout(timer);
    if(c_cur - c_start >= 400){
        animate();
        c_start = c_cur;
    }else{
        timer = setTimeout(function(){
            animate();
        }, 100);
    }
});

//控制动画函数
function animate(){
	var top = $('.main').scrollTop();
	if(top >= innerHeight/3){
		$('.anchor1').addClass('animation1');
		$('.anchor2').addClass('animation1');
		$('.anchor3').addClass('animation2');
	}
	if(top >= innerHeight+innerHeight/3){
		$('.anchor4').addClass('animation1');
		$('.anchor5').addClass('animation1');
		$('.anchor6').addClass('animation2');
	}
	if(top >= innerHeight*2+innerHeight/3){
		$('.anchor7').addClass('animation1');
	}
}

//下载点击事件
$('#download_btn').click(function(){
	$('.popup_box').show();
});

//弹框关闭点击事件
$('.close').click(function(){
	$('.popup_box').hide();
});