$(function(){
	$(".header li").hover(function(){
		$(this).not(".activeli").animate({
			backgroundPositionY:-100+'px'
		},300).css("transition","linear")
		.siblings().not(".activeli").animate({
			backgroundPositionY:0
		})
	},function(){
		$(this).not(".activeli").animate({
			backgroundPositionY:0
		},300).css("transition","linear")
	})

        $(".taocan .kids:eq(0)").click(function() {
          $(".content1").show().siblings().hide();
           $(this).css({"color":"#b28146","background":"url('images/images02/tab_bg.gif') 0 0"});
           $(this).siblings().css({"color":"#999","backgroundPosition":" 0 -160px"});
        });
        $(".taocan .kids:eq(1)").click(function() {
          $(".content2").show().siblings().hide();
           $(this).css({"color":"#b28146","background":"url('images/images02/tab_bg.gif') 0 0"});
           $(this).siblings().css({"color":"#999","backgroundPosition":" 0 -160px"});
        });
        $(".taocan .kids:eq(2)").click(function() {
          $(".content3").show().siblings().hide();
           $(this).css({"color":"#b28146","background":"url('images/images02/tab_bg.gif') 0 0"});
           $(this).siblings().css({"color":"#999","backgroundPosition":" 0 -160px"});
        });
        $(".taocan .kids:eq(3)").click(function() {
          $(".content4").show().siblings().hide();
           $(this).css({"color":"#b28146","background":"url('images/images02/tab_bg.gif') 0 0"});
           $(this).siblings().css({"color":"#999","backgroundPosition":" 0 -160px"});
        });
        $(".taocan .kids:eq(4)").click(function() {
          $(".content5").show().siblings().hide();
           $(this).css({"color":"#b28146","background":"url('images/images02/tab_bg.gif') 0 0"});
           $(this).siblings().css({"color":"#999","backgroundPosition":" 0 -160px"});
        });
     
})