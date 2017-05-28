$('ul li').on('click', function() {
    $('ul li').removeClass('active');
    $(this).addClass('active');
    var test = $(this).children('a').attr('href');

    $('html, body').animate({
        'scrollTop': $(test).offset().top
    }, 1500);

});

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.navbar').css({
            'background-color': 'rgba(255,255,255,.6)'
        });
    } else {
        $('.navbar').css({
            'background-color': 'rgba(255,255,255,0)'
        });
    }

});
