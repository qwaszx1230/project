$(function() {
    $("#kinMaxShow").kinMaxShow();

    $('#slideTop').cxScroll({
        direction: 'bottom', // 滚动方向
        easing: 'swing', // 缓动方式
        step: 1, // 滚动步长
        speed: 400, // 自动滚动速度
        time: 2000, // 自动滚动间隔时间
        auto: true, // 是否自动滚动
        hoverLock: true, // 鼠标移入移出锁定
        prevBtn: true, // 是否使用 prev 按钮
        nextBtn: true // 是否使用 next 按钮
    });
  // 返回的顶部
    $(window).scroll(function() {
    	var h = $(document).scrollTop();
    	if (h > 20) {
    		$('.alide').css('display','block');
    	}else {
    		$('.alide').css('display','none');
    	}
    });
    $('.weixin').hover(function() {
    	$(this).find('.wx').css('display','block')
    }, function() {
    	$(this).find('.wx').css('display','none')
    });
    $(window).resize(function() {
       var w=window.outerWidth;
       if ( w <1200) {
         $('.alide').css('display','none');
       }else {
           $('.alide').css('display','block');
       }  
    });
    
    // 第一部分的切换
    $('.part3Text a:eq(0)').css('border', '8px solid #00aca8');
    $('.part3Img span:eq(1)').fadeOut();
    if ($('.part3Text a:eq(1)').hasClass('bor')) {
        $('.part3Text a:eq(0)').css('border', '8px solid #f5f5f5');
    }
    $('.part3Text a').hover(function() {
        var index = $(this).index();
        $('.part3Text a:eq(' + index + ')').css('border', '8px solid #00aca8');
        $('.part3Text a:eq(' + index + ')').siblings('a').css('border', '8px solid #f5f5f5');
        $('.part3Img span:eq(' + index + ')').fadeIn();
        $('.part3Img span:eq(' + index + ')').siblings('span').fadeOut();
    });
    // var isShow = true;
    function fadein(argument) {
        var isShow = true;
        if (isShow == !isShow) {
            $('.part3Text a:eq(0)').css('border', '8px solid #00aca8');
            $('.part3Text a:eq(1)').css('border', '8px solid #f5f5f5');
            $('.part3Img span:eq(0)').fadeIn();
            $('.part3Img span:eq(1)').fadeOut();
        } else {
            $('.part3Text a:eq(1)').css('border', '8px solid #00aca8');
            $('.part3Text a:eq(0)').css('border', '8px solid #f5f5f5');
            $('.part3Img span:eq(1)').fadeIn();
            $('.part3Img span:eq(0)').fadeOut();
        }
        // return isShow = false
    }
    // setInterval(function(){
    //   fadein()
    //   // return isShow = false;
    // },3000)

    // 婚纱照的遮罩上拉
    $('.hunshaCont ul li').hover(function() {
        $(this).find('.mark').slideDown(300)
    }, function() {
        $(this).find('.mark').slideUp(200)
    });

    // 服务报价
    $('.sec4 .sec4Div a').hover(function() {
        $(this).css('color', '#ff283d')
        $(this).find('div:eq(1)').css('borderColor', '#00aca8')
    }, function() {
        $(this).css('color', '#646464')
        $(this).find('div:eq(1)').css('borderColor', '#f5f5f5')
    });

    // 品牌优势
    $('.set5Div1 ul li').hover(function() {
      $(this).find('a>p').css('background-color','#ff283d')
    }, function() {
       $(this).find('a>p').css('background-color','#00aca8')
    });

    $('.sec5Div2 a').hover(function() {
      $(this).find('h3').addClass('active').parent().siblings().find('h3').removeClass('active');
      var index = $(this).index();
       $('.sec5Box .set5Div1:eq('+index+')').css('zIndex','100').siblings().css('zIndex','10')
      if ( $(this).find('h3').hasClass('active') ) {
        $(this).find('div').css('opacity','1').parent().siblings().find('div').css('opacity','0');
         
      }
    });
     
   

});