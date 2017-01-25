// Source: https://codepen.io/rdallaire/pen/apoyx

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function backToTop() {
        console.log("Scrolling to top...");
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
}

// $('#return-to-top').click(function() {      // When arrow is clicked
//     console.log("Scrolling to top...");
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });