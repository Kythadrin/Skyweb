$(document).ready(function() {
    $(".menu").click(function() {
        $(".menu_list").toggleClass('visible');
        $("content").toggleClass('navbar-opened');
    });

    $(".accordion").each( function() {
        $(this).on("click", function() {
            $(this).toggleClass('active');
            $(this).next().toggleClass('visible');
        });
    });
});