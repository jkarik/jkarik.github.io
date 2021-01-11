function openNav() {
    document.getElementById("show-menu").style.right = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("show-menu").style.right = "-240px";
}

var back_to_top = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
        back_to_top.addClass('show');
    } else {
        back_to_top.removeClass('show');
    }
});

back_to_top.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

var active = false;
$(".view-all").on("click", function() {

    $(".team-member.hidden").slideToggle();
    $(this).text(active ? 'View all' : 'Hide all')
    active = !active;
});

function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).outerWidth() < 1281) {
        $('.team-member:nth-child(4)').addClass('hidden');
    }
    else {
        if (!init) {
            $('.team-member:nth-child(4)').removeClass('hidden');
        }
    }

    if ($(window).outerWidth() < 961) {
        $('.team-member:nth-child(3)').addClass('hidden');
    }
    else {
        if (!init) {
            $('.team-member:nth-child(3)').removeClass('hidden');
        }
    }

    if ($(window).outerWidth() < 661) {
        $('.team-member:nth-child(2)').addClass('hidden');
    }
    else {
        if (!init) {
            $('.team-member:nth-child(2)').removeClass('hidden');
        }
    }
}

$(document).ready(function() {

    $('a.nav-col-el[href^="#"]').bind('click.smoothscroll',function (e) {

        var offset = 0;
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - offset
        }, 1200, 'swing', function() {
            // window.location.hash = target;
        });
    });

    $('a.nav-col-mob[href^="#"]').bind('click.smoothscroll',function (e) {

        var offset = 61;
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - offset
        }, 1200, 'swing', function() {
            // window.location.hash = target;
        });

        document.getElementById("show-menu").style.right = "-240px";
    });

    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});


$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top > 0) {
        $("#main-nav").addClass("header-fixed");
    } else {
        $("#main-nav").removeClass("header-fixed");
    }
});