/**
 * 메뉴 script Event
 */

$(function(){
	   $('nav ul').hide();
	   
	   $('.menuBtn').click(function(e){
		   $('nav ul').toggle(); // hide와 show 속성 뒤바뀜
		   
	       e.preventDefault();
	       $(this).toggleClass('active');
	       $('nav ul').toggleClass('trans');
	   });
   });

// 스크롤링 이벤트 : 특정 클래스에 스크롤이 위치할 때 발생
$(window).scroll(function(){
		const sctln = $(window).scrollTop();
		
		//nav
		if(sctln>=$('.about').offset().top){
			$('.menuBtn').addClass('show');
		} else {
			$('.menuBtn').removeClass('show');
		}
});