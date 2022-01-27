$(window).resize(function() {
    if ($(window).width() > 767) {
        $(".menu_list").css("height", "100%");
    } else {
        $(".menu_list").css({
            "height" : "0",
            "transition" : "0s",
        });
    }
});

$(document).ready(function() {
    $(".menu").click(function() {
        let content = $("content");
        let menu = $(".menu_list");

        menu.toggleClass('visible');
        menu.toggleClass('hidden');
        content.toggleClass('navbar-opened');
        content.toggleClass('navbar-closed');

        if (menu.css("height") == "200px") {
            menu.css({
                "height" : "0",
                "border-bottom" : "0",
            });
            content.css("margin-top", "0");
        } else {
            menu.css({
                "height" : "200px",
                "border-bottom" : "1px",
                "border-bottom-color" : "lightgrey",
                "border-bottom-style" : "solid",
            });
            content.css("margin-top", "200px");
        }  
    });

    $(".accordion").each( function() {
        $(this).on("click", function() {
            $(this).toggleClass('deactive');
            $(this).toggleClass('active');
            $(this).next().toggleClass('hidden');
            $(this).next().toggleClass('visible');
        });
    });
});