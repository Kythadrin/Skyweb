$(window).resize(function() {
    if ($(window).width() > 767) {
        $(".menu_list").css("display", "flex");
    } else {
        $(".menu_list").css("display", "none");
    }
});

$(document).ready(function() {
    $(".menu").click(function() {
        let content = $("content");
        let menu = $(".menu_list");

        if (menu.css("display") == "flex") {
            menu.css("display", "none");
            content.css("margin-top", "0");
        } else {
            menu.css("display", "flex");
            content.css("margin-top", "200px");
        }  
    });
});