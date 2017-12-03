jQuery.easing.def = "easeInOutQuad";
$(window).scroll(function() {
    let body = $(document.body);
    let header = $("header");
    let y = $(window).scrollTop();

    header.css("background", "rgba(0, 0, 0, " + Math.min(0.8, y * (1 / 200)) + ")");
    header.css("box-shadow", "0 0 " + Math.min(20, (y * (20 / 200))) + "px black");
});