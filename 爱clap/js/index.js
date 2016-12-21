$(function(){
	// 滚屏
	$('#iclap-main').fullpage({
		navigation: true,
		verticalCentered: true,
		continuousVertical: false,
		resize: false,
		afterRender: function(){
			//开始
			setTimeout(function(){
				$(".ab-right").animate({
					opacity:1,
					top:10
				},1500,'easeOutExpo');
			},0);
			setTimeout(function(){
				$(".first-content .fl-left .section1-ptext01").animate({
					opacity:1,
					left:0
				},1500,'easeOutExpo');
			},200);
			setTimeout(function(){
				$(".first-content .fl-left .section1-ptext02").animate({
					opacity:1,
					left:0
				},1500,'easeOutExpo');
			},400);
			setTimeout(function(){
				$(".first-content .fl-left .section1-ptext03").animate({
					opacity:1,
					left:0
				},1500,'easeOutExpo');
			},600);
			setTimeout(function(){
				$(".first-content .fl-left .section1-ptext04").animate({
					opacity:1,
					left:0
				},1500,'easeOutExpo');
			},800);
			setTimeout(function(){
				$(".first-content .fl-left .download-box").animate({
					opacity:1,
					left:0
				},1500,'easeOutExpo');
			},1000);
			//结束
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				//开始
				setTimeout(function(){
					$(".ab-right").animate({
						opacity:1,
						top:10
					},1500,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext01").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext02").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},400);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext03").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},600);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext04").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},800);
				setTimeout(function(){
					$(".first-content .fl-left .download-box").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},1000);
				//结束
			}
			if(index == 2){
				//开始
				setTimeout(function(){
					$(".second-content .h2-title").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box01").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box02").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},400);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box03").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},500);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box04").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},600);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box05").animate({
						opacity:1,
						left:0
					},1500,'easeOutExpo');
				},700);
				setTimeout(function(){
					$(".second-content .more-gongneng").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},1000);
				//结束
			}
			if(index == 3){
				//开始
				setTimeout(function(){
					$(".third-content .h2-title").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".pizhu-content .fl").animate({
						opacity:1,
						left:0
					},1000,'easeOutExpo');
				},800);
				setTimeout(function(){
					$(".pizhu-content .fr").animate({
						opacity:1,
						right:0
					},1000,'easeOutExpo');
				},800);
				//结束
			}
			if(index == 4){
				//开始
				setTimeout(function(){
					$(".seventh-content .h2-title").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".seventh-content .section7-ptext01").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},400);
				setTimeout(function(){
					$(".seventh-content .section7-pimg01 img").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},800);
				setTimeout(function(){
					$(".seventh-content .section7-pimg02 img").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},800);
				//结束
			}
			if(index == 5){
				//开始
				setTimeout(function(){
					$(".fourth-content .section4-ptext01").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".fourth-content .section4-ptext02").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".fourth-content .section4-pimg01").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},500);
				setTimeout(function(){
					$(".fourth-content .section4-pimg01 .renwu-img").animate({
						opacity:1,
						width:83,
						top:-22,
						right:-20,
					},200,'easeOutExpo');
				},800);
				setTimeout(function(){
					$(".fourth-content .section4-ptext03").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},1500);
				//结束
			}
			if(index == 6){
				//开始
				setTimeout(function(){
					$(".fifth-content .h2-title").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".xiezuo-content .fl").animate({
						opacity:1,
						left:0
					},1000,'easeOutExpo');
				},800);
				setTimeout(function(){
					$(".xiezuo-content .fr").animate({
						opacity:1,
						right:0
					},1000,'easeOutExpo');
				},800);
				//结束
			}
			if(index == 7){
				//开始
				setTimeout(function(){
					$(".sixth-content .h2-title").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".sixth-content .section6-ptext01").animate({
						opacity:1,
						top:0
					},1000,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".section6-pimg01 .section6-img01").animate({
						opacity:1,
						width:444,
						top:0
					},600,'easeOutExpo');
				},600);
				setTimeout(function(){
					$(".section6-pimg02 .section6-img02").animate({
						opacity:1,
						width:590,
						top:0
					},600,'easeOutExpo');
				},600);
				setTimeout(function(){
					$(".footer").show().animate({
						opacity:1,
						bottom:0
					},1000,'easeOutExpo');
				},1000);
				//结束
			}
		},
		onLeave: function(index,nextIndex, direction){
			setTimeout(function(){
				$(".footer").animate({
					opacity:0,
					bottom:-100
				},1000,'easeOutExpo');
				$(".footer").hide();
			},1000);
			if(index == 1){
				//开始
				setTimeout(function(){
					$(".ab-right").animate({
						opacity:0,
						top:100
					},1500,'easeOutExpo');
				},500);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext01").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},400);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext02").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext03").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".first-content .fl-left .section1-ptext04").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".first-content .fl-left .download-box").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},0);
				//结束
			}
			if(index == 2){
				//开始
				setTimeout(function(){
					$(".second-content .h2-title").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},600);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box01").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},500);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box02").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},400);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box03").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box04").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".second-content .gaibian-list .gaibian-box05").animate({
						opacity:0,
						left:-100
					},1500,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".second-content .more-gongneng").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},0);
				//结束
			}
			if(index == 3){
				//开始
				setTimeout(function(){
					$(".third-content .h2-title").animate({
						opacity:0,
						top:100
					},1500,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".pizhu-content .fl").animate({
						opacity:0,
						left:-100
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".pizhu-content .fr").animate({
						opacity:0,
						right:-100
					},1000,'easeOutExpo');
				},0);
				//结束

			}
			if(index == 4){
				//开始
				setTimeout(function(){
					$(".seventh-content .h2-title").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".seventh-content .section7-ptext01").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".seventh-content .section7-pimg01 img").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".seventh-content .section7-pimg02 img").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},0);
				//结束
			}
			if(index == 5){
				//开始
				setTimeout(function(){
					$(".fourth-content .section4-ptext01").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".fourth-content .section4-ptext02").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".fourth-content .section4-pimg01").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},300);
				setTimeout(function(){
					$(".fourth-content .section4-pimg01 .renwu-img").animate({
						opacity:0,
						width:300,
						top:-300,
						right:-100,
					},200,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".fourth-content .section4-ptext03").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},0);
				//结束
			}
			if(index == 6){
				//开始
				setTimeout(function(){
					$(".fifth-content .h2-title").animate({
						opacity:0,
						top:100
					},1500,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".xiezuo-content .fl").animate({
						opacity:0,
						left:-100
					},1000,'easeOutExpo');
				},0);
				setTimeout(function(){
					$(".xiezuo-content .fr").animate({
						opacity:0,
						right:-100
					},1000,'easeOutExpo');
				},0);
				//结束
			}
			if(index == 7){
				//开始
				setTimeout(function(){
					$(".sixth-content .h2-title").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},200);
				setTimeout(function(){
					$(".sixth-content .section6-ptext01").animate({
						opacity:0,
						top:100
					},1000,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".section6-pimg01 .section6-img01").animate({
						opacity:0,
						width:888,
						top:-200
					},600,'easeOutExpo');
				},100);
				setTimeout(function(){
					$(".section6-pimg02 .section6-img02").animate({
						opacity:0,
						width:888,
						top:-100
					},600,'easeOutExpo');
				},100);
				
				setTimeout(function(){
					$(".footer").animate({
						opacity:0,
						bottom:-100
					},1000,'easeOutExpo');
				},0);
				$(".footer").hide();
				
				
				//结束
			}
		}
	});
});
