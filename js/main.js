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
	  var project1 = '<div data-aos="fade-right" data-aos-duration="1200" class="project_imgbox2"><img alt="pc" src="./images/pc.png" class="pc_img"></div>';
	  var project2 = '<div class="project_imgbox1"><img alt="pc" src="./images/pc.png" class="pc_img"></div>';
	  var project3 = '<div class="project_imgbox3"><img alt="pc" src="./images/pc.png" class="pc_img"></div>';
		  
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
	  
	  // 800 이하인지 if문으로 확인
	  if (width_size <= 800) {
		  if($('.project_imgbox2').length == 1) { // 이미지 박스가 존재하면 삭제
			  $('.project_imgbox2').remove();
		  }
		  if($('.project_imgbox1').length == 1) {
			  $('.project_imgbox1').remove();
		  }
		  if($('.project_imgbox3').length == 1) {
			  $('.project_imgbox3').remove();
		  }
		  
	  } else {
		  if($('.project_imgbox2').length == 0) { // 이미지 박스가 존재하지 않으면 불러오기
			  $('.project_box1').prepend(project1);
	  	  }
		  if($('.project_imgbox1').length == 0) {
			  $('.project_box2').prepend(project2);
		  }
		  if($('.project_imgbox3').length == 0) {
			  $('.project_box3').prepend(project3);
		  }
	  }
	});

