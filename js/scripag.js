$(document).on("ready",inicio_pagina);
var contador=1;
function inicio_pagina () {
	$(window).scroll(movermenu);
	$("#mn_mv").on("click",abrir_menu);
}
function abrir_menu () {
	if (contador==1) {
		$("#mnP").animate({left:"0"}, 500);
		contador=0;
	}
	else{
		$("#mnP").animate({left:"-100%"}, 500);
		contador=1;
	}
}
function movermenu () {
	var altoin=$("#inic").height();
	console.log(altoin);
	if ($(window).scrollTop()>altoin) {
		$("header").css({position:"fixed"});
	}
	else{
		$("header").css({position:"relative"});
	}
}