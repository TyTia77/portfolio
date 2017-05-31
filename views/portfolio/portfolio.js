$(document).ready(function(){

    // elements hasn't been loaded yet
    setTimeout(function(){
        window.sr = ScrollReveal({reset: true});

        sr.reveal('.squares', {
            origin: 'left',
            viewFactor: .3,
            opacity: 0,
            delay: .5,
            duration: 700,
            scale: .1,
            mobile: true
        })
    }, 1);






    if (/Mobi/.test(navigator.userAgent)) {
        // mobile!
        $(document).on('tap', 'body', function(){
            $('.hover-detail').removeClass('show');
        })

        $(document).on('tap', '.hover-detail', function(e){
            e.stopPropagation();
            $(this).addClass('show');
        })
    } else {
        $(document).on('mouseenter', '.hover-detail', function(){
            $(this).addClass('show');
        }).on('mouseleave', '.hover-detail', function(){
            $(this).removeClass('show');
        });
    }


})
