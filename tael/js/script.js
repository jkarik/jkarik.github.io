function openNav() {
    // document.getElementById("show-menu").style.display = "block";
    document.getElementById("show-menu").style.opacity = "1";
    document.getElementById("show-menu").style.left = "0";
}

function closeNav() {
    // document.getElementById("show-menu").style.display = "none";
    document.getElementById("show-menu").style.opacity = "0";
    document.getElementById("show-menu").style.left = "-120vw";
}

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function() {

    $('a.slide-to[href^="#"]').bind('click.smoothscroll', function (e) {

        var offset = 0;
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - offset
        }, 1000, 'swing', function () {
            // window.location.hash = target;
        });
    });

});
