$(function(){
    
    //banner
	var speed = 0;
	$('.banner .picture li').eq(0).show();
	$('.banner .butt li').eq(0).css({'background':'#e17300','opacity':'1'});
	var timer = setInterval(banner,3500);

	function banner(){
		speed++;
		if(speed > 3){speed = 0;}
		$('.banner .picture li').eq(speed).fadeIn('slow').siblings().hide();
		$('.banner .butt li').eq(speed).css({'background':'#e17300','opacity':'1'}).siblings().css({'background':'#fe976a','opacity':'0.5'});
	}

	$('.banner .butt li').hover(function(){
		speed = $(this).index();
		clearInterval(timer);
		$('.banner .butt li').eq(speed).css({'background':'#e17300','opacity':'1'}).siblings().css({'background':'#fe976a','opacity':'0.5'});
		$('.banner .picture li').eq(speed).fadeIn('slow').siblings().hide();
	},function(){
		timer = setInterval(banner,3500);
	});

    //banner 左侧咨询数字
    function Timenum(){
        var x = 60;     
        var y = 20;    
        var num1 = parseInt(Math.random() * (x - y + 1) + y);
        var num2 = parseInt(Math.random() * (x - y + 1) + y);
        var num3 = parseInt(Math.random() * (x - y + 1) + y);
        var num4 = parseInt(Math.random() * (x - y + 1) + y);
        var num5 = parseInt(Math.random() * (x - y + 1) + y);

        $('.banner .fl li').eq(0).find('span i').text(num1);
        $('.banner .fl li').eq(1).find('span i').text(num2);
        $('.banner .fl li').eq(2).find('span i').text(num3);
        $('.banner .fl li').eq(3).find('span i').text(num4);
        $('.banner .fl li').eq(4).find('span i').text(num5);
    }
    setInterval(Timenum,1000);

})