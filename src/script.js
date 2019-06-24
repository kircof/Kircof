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
  $("#glitchContainer").hover(function() {
    var tl = new TimelineMax({ repeat: -1, repeatDelay: 5 });
    tl.to(".glitch", 0.1, { skewX: 10, ease: Power4.easeInOut })
      .to(".glitch", 0.01, { skewX: 0, ease: Power4.easeInOut })
      .to(".glitch", 0.01, { opacity: 0 })
      .to(".glitch", 0.01, { opacity: 1 })
      .to(".glitch", 0.01, { x: -1 })
      .to(".glitch", 0.01, { x: 0 })
      .add("split", 0)
      .to(".top", 0.5, { x: -60, ease: Power4.easeInOut }, "split")
      .to(".bottom", 0.5, { x: 60, ease: Power4.easeInOut }, "split")
      .to(".glitch", 0.08, { className: "+=redShadow" }, "split")

      .to("#txt", 0, { scale: 1.1 }, "split")
      .to("#txt", 0, { scale: 1 }, "+=0.02")

      .to(".glitch", 0.08, { className: "-=redShadow" }, "+=0.09")
      .to(".glitch", 0.03, { className: "+=greenShadow" }, "split")
      .to(".glitch", 0.03, { className: "-=greenShadow" }, "+=0.01")

      .to(".top", 0.2, { x: 0, ease: Power4.easeInOut })
      .to(".bottom", 0.2, { x: 0, ease: Power4.easeInOut })

      .to(".glitch", 0.02, { scaleY: 1.1, ease: Power4.easeInOut })
      .to(".glitch", 0.01, { scaleY: 1, ease: Power4.easeInOut });
  });
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
