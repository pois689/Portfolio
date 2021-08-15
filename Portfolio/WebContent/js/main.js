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

/**
 * 반응형
 */

$(window).resize(function (){
	  // width값을 가져오기
	  var width_size = window.outerWidth;
	  
	  // 740 이하인지 if문으로 확인
	  if (width_size <= 740) {
		  
		  if($('#br').length == 0) { // br 클래스 존재 여부 확인
			  $('.institution').after('<br id="br">');
		  }
		  
	  } else { // 740 아하가 아니라면 해당 클래스 삭제
		  
		 if($('#br').length == 1) {
			 $('#br').remove();
		 }
	  }
	});

