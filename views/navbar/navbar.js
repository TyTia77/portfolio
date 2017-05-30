$('nav ul li').on('click', function(e) {
    console.log('party');
    e.preventDefault();

    var hash = $(this).children('a').attr('href');

    $('html, body').animate({
        'scrollTop': $(hash).offset().top
    }, 700);

});

$(window).scroll(function() {
var scrollpos = $(document).scrollTop();
var backcolor = scrollpos > 100 ? 'rgba(0,0,0,.8)' : 'rgba(255,255,255,0)';
$('.navbar').css({'background-color': backcolor});

if (scrollpos > 1) {
    $('main span[id]').each(function(i) {
        if ($(this).position().top <= scrollpos +10) {
            $('ul li.active').removeClass('active');
            $('ul li').eq(i).addClass('active');
        }
    });
} else {
    $('ul li.active').removeClass('active');
    $('ul li:first').addClass('active');
}

});
