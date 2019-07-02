$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height() * .5;
    var tags = $("section");

    for (let i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        }
        else {
            $(tag).removeClass("visible");
        }
    }
});

var url = "https://script.google.com/macros/s/AKfycbwVOs1dFDvBoaUnTVPwJFfTE9s3zs_DMM5pe6dUKlIAnUUEx2It/exec";

$(document).ready(function () {
    $('#contact-form').on("submit", function (e) {
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $("#contact-form").serialize(),
            success: function (res) {
                console.log(res);
            }
        })
        $("#thanks-message").addClass("visible");
    })
})