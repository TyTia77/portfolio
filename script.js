$('ul li').on('click', function(e) {
    $('ul li').removeClass('active');
    $(this).addClass('active');
    var test = $(this).children('a').attr('href');
    e.preventDefault();

    $('html, body').animate({
        'scrollTop': $(test).offset().top
    }, 1000);

});

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.navbar').css({
            'background-color': 'rgba(255,255,255,.8)'
        });
    } else {
        $('.navbar').css({
            'background-color': 'rgba(255,255,255,0)'
        });
    }

});

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function($scope){
    $scope.projects = [
        {img: 'Capture.PNG', title: 'simon game'},
        {img: 'Capture1.PNG', title: 'tic tac toe game', color: '#162924'},
        {img: 'Capture2.PNG', title: 'quote generater', color: '#E74C3C'},
        {img: 'Capture3.PNG', title: 'twitch stream viewer'},
        {img: 'Capture4.PNG', title: 'weather app'},
        {img: 'Capture5.PNG', title: 'wikipedia search', color: '#092B40'},
        {img: 'Capture6.PNG', title: '', color: '#2C3E50'},
        {img: 'Capture7.PNG', title: 'calculator'}
    ];

    $scope.mouseIn = function(e){
        e.target.classList.add('show');
    }

    $scope.mouseOut = function(e){
        e.target.classList.remove('show');
    }


}]);
