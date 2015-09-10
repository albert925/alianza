$(document).on("ready",inicio_pagina);
var contador=1;
function inicio_pagina () {
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