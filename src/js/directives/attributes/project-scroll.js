app.directive('scrollEffect', ['$timeout', function($timeout){
    return {
        restrict : 'A',
        link     : function(){
            $timeout(function(){
                sr.reveal('.portfolio-header', {
                    distance   : '100px',
                    duration   : 700,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'top',
                    reset      : false,
                    scale      : .1,
                    viewFactor : .1
                })

                sr.reveal('.portfolio-container .line', {
                    duration   : 2000,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'center',
                    reset      : false,
                    rotate     : { x: 0, y: 90, z: 0 },
                    scale      : 0.1,
                    viewFactor : .1
                })

                sr.reveal('.project-grid', {
                    duration   : 700,
                    mobile     : true,
                    opacity    : 0,
                    origin     : 'left',
                    reset      : false,
                    scale      : .1,
                    viewFactor : .1
                })                
            }, 0);
        }
    }
}]);
