app.directive('scrollEffect', ['$timeout', function($timeout){
    return {
        link: function(){
            $timeout(function(){
                sr.reveal('.portfolio-header', {
                    origin: 'top',
                    viewFactor: .1,
                    distance: '100px',
                    opacity: 0,
                    duration: 700,
                    scale: .1,
                    reset: false,
                    mobile: true
                })

                sr.reveal('.portfolio-container .line', {
                    origin: 'center',
                    viewFactor: .1,
                    opacity: 0,
                    duration: 2000,
                    scale: 0.1,
                    rotate: { x: 0, y: 90, z: 0 },
                    reset: false,
                    mobile: true
                })

                sr.reveal('.squares', {
                    origin: 'left',
                    viewFactor: .3,
                    opacity: 0,
                    duration: 700,
                    scale: .1,
                    reset: false,
                    mobile: true
                })

                sr.reveal('.project-card>h3', {
                    origin: 'bottom',
                    viewFactor: .01,
                    distance: '50px',
                    opacity: 0,
                    delay: 300,
                    duration: 800,
                    reset: false,
                    mobile: true
                })
            }, 0);

        }
    }
}]);
