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

})
