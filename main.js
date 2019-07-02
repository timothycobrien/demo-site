$(document).on("scroll", function (){
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height()*.5;
    var tags = $("section");

    for (let i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        }
        else{
            $(tag).removeClass("visible");
        }
    }
})