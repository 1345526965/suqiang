$(document).ready(function() {
	$(window).scroll(function() {
		var nav = $('.am-topbar');
		var sctop = $(this).scrollTop();
		nav.each(function() {
			if(sctop > 85) {
				$(".am-topbar").addClass('headerfixed');
			}
			else {
				$(".am-topbar").removeClass('headerfixed');
			}
		});

	});
	
	$(".service-box .open").on("click",function(){
		$(this).parent(".service-box").toggleClass("open-text").parent("li").siblings().find(".parent").removeClass("open-text");
	});
});
