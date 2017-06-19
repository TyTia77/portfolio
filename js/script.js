// put scrollreveal on global scope
window.sr = ScrollReveal({
    reset: true
});

// disable scrolling
setTimeout(function(){
    $('body').css('overflow-y', 'visible');
}, 7000);

var app = angular.module('app', ['angular.filter']);

// global controller
app.controller('ctrl', ['$scope', function($scope){

}]);
