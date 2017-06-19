app.directive('skillLoad', ['$timeout', function($timeout){
    return {
        link: function(){
            $timeout(function(){
                sr.reveal('.skill-container>h1', {
                    origin: 'top',
                    viewFactor: .1,
                    distance: '100px',
                    opacity: 0,
                    duration: 700,
                    scale: .1,
                    reset: false,
                    mobile: true
                })

                sr.reveal('.button-container', {
                    origin: 'bottom',
                    viewFactor: .1,
                    distance: '100px',
                    opacity: 0,
                    duration: 700,
                    scale: .1,
                    reset: false,
                    mobile: true
                })

                sr.reveal('.skill-row div', {
                    origin: 'bottom',
                    viewFactor: .2,
                    distance: '100px',
                    opacity: 0,
                    duration: 700,
                    scale: .1,
                    reset: false,
                    mobile: true
                })
            })
        }
    }
}]);
