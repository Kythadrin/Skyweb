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

        menu.css("transition", "height 0.2s ease-out")

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
            $(this).toggleClass('active');
            $(this).toggleClass('deactive');
            
            let content = $(this).next();
    
            if (content.css("max-height") == "0px") {
                content.css("max-height", content.prop('scrollHeight'));
            } else {
                content.css("max-height", "0");
            }
        });
    });
});