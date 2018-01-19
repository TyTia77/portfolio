app.directive('skillLoad', ['$timeout', function($timeout){
    return {
        restrict : 'A',
        link     : function(){
            $timeout(function(){
                sr.reveal('.skill-container>h1', {
                    distance   : '100px',
                    duration   : 700,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'top',
                    reset      : false,
                    scale      : .1,
                    viewFactor : .1
                })

                sr.reveal('.skill-container .line', {
                    duration   : 2000,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'center',
                    reset      : false,
                    rotate     : { x: 0, y: 90, z: 0 },
                    scale      : 0.1,
                    viewFactor : .1
                })

                sr.reveal('.button-container', {
                    distance   : '100px',
                    duration   : 700,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'bottom',
                    reset      : false,
                    scale      : .1,
                    viewFactor : .1
                })

                sr.reveal('.skill-row', {
                    distance   : '100px',
                    duration   : 700,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'bottom',
                    reset      : false,
                    scale      : .1,
                    viewFactor : .1
                })
            })
        }
    }
}]);
