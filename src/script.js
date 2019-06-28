import { default as $ } from "jquery";

$(document).ready(function() {
	//Cambio de palabra banner
	var h2 = $('h2[id^="content-"]').hide(),
		i = 0;

	(function cycle() {
		h2.eq(i)
			.fadeIn(400)
			.delay(4000)
			.fadeOut(400, cycle);

		i = ++i % h2.length;
	})();
	//Cambio de palabra banner
	//Cambio de palabra circulo beneficios
	var h1 = $('h1[id^="circleTextContent-"]').hide(),
		h = 0;

	(function cycle2() {
		h1.eq(h)
			.fadeIn(400)
			.delay(4000)
			.fadeOut(400, cycle2);

		h = ++h % h1.length;
	})();
	//Cambio de palabra circulo beneficios
	//Cambio de palabra texto beneficios
	var h4 = $('h4[id^="ResumenBeneficios-"]').hide(),
		j = 0;

	(function cycle3() {
		h4.eq(j)
			.fadeIn(400)
			.delay(2000)
			.fadeOut(400, cycle3);

		j = ++j % h4.length;
	})();
	//Cambio de palabra texto beneficios
	//Glitch imagen

	function set() {
		setInterval(function() {
			console.log($(".pantallacomputadora").css("background-image"));
		}, 100);
	}
	set();
	//Glitch imagen
});

//Aparecer simbolos al hacer scroll
$(document).on("scroll", function() {
	if (isScrolledIntoView()) {
		var $svg = $("#svg");
		$svg.addClass("flip-vertical-right");
	}
	if (isScrolledIntoView1()) {
		var $svg1 = $("#svg1");
		$svg1.addClass("flip-vertical-right1");
	}
	if (isScrolledIntoView2()) {
		var $svg2 = $("#svg2");
		$svg2.addClass("flip-vertical-right2");
	}
	if (isScrolledIntoView3()) {
		var $svg3 = $("#svg3");
		$svg3.addClass("flip-vertical-right3");
	}
	if (isScrolledIntoView4()) {
		var $svg4 = $("#svg4");
		$svg4.addClass("flip-vertical-right4");
	}
});

function isScrolledIntoView() {
	var $win = $(window);
	var $svg = $("#svg");
	var docViewTop = $win.scrollTop();
	var docViewBottom = docViewTop + $win.height();

	var elemTop = $svg.offset().top;
	var elemBottom = elemTop + $svg.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function isScrolledIntoView1() {
	var $win = $(window);
	var $svg1 = $("#svg1");
	var docViewTop = $win.scrollTop();
	var docViewBottom = docViewTop + $win.height();

	var elemTop = $svg1.offset().top;
	var elemBottom = elemTop + $svg1.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function isScrolledIntoView2() {
	var $win = $(window);
	var $svg2 = $("#svg2");
	var docViewTop = $win.scrollTop();
	var docViewBottom = docViewTop + $win.height();

	var elemTop = $svg2.offset().top;
	var elemBottom = elemTop + $svg2.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function isScrolledIntoView3() {
	var $win = $(window);
	var $svg3 = $("#svg3");
	var docViewTop = $win.scrollTop();
	var docViewBottom = docViewTop + $win.height();

	var elemTop = $svg3.offset().top;
	var elemBottom = elemTop + $svg3.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function isScrolledIntoView4() {
	var $win = $(window);
	var $svg4 = $("#svg4");
	var docViewTop = $win.scrollTop();
	var docViewBottom = docViewTop + $win.height();

	var elemTop = $svg4.offset().top;
	var elemBottom = elemTop + $svg4.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
//Aparecer simbolos al hacer scroll
