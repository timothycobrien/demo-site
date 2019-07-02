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
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzmhek8WcamszFaAwPnlZwUjxYZcQO5FxxJq0aGElQfG1CbUW8/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});
