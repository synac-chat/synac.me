jQuery.easing.def = "easeInOutQuad";
$(window).scroll(function() {
    let body = $(document.body);
    let header = $("header");
    let name_large = $("#name-large");
    let name_small = $("#name-small");
    let y = $(window).scrollTop();

    name_small.css("opacity",     Math.max(0, Math.min(1, y * (1 / 200))));
    name_large.css("opacity", 1 - Math.max(0, Math.min(1, y * (1 / 200))));

    header.css("background", "rgba(0, 0, 0, "       + Math.min(0.8, y * (1 / 200)) + ")");
    header.css("box-shadow", "0 0 " + Math.min(20, (y * (20 / 200))) + "px black");
});