var app = angular.module('app', []);
app.controller('ctrl', ['$scope', '$timeout', function($scope, $timeout){
    // $scope.projects = [
    //     {img: 'images/Capture.PNG', title: 'simon game', id: 'simon-game', color: '#fff'},
    //     {img: 'images/Capture1.PNG', title: 'tic tac toe game', id: 'tictactoe', color: '#162924'},
    //     {img: 'images/Capture2.PNG', title: 'quote generater', id: 'quotes', color: '#E74C3C'},
    //     {img: 'images/Capture3.PNG', title: 'twitch stream viewer', id: 'twitch-streams', color: '#fff'},
    //     {img: 'images/Capture4.PNG', title: 'weather app', id: 'weatherapp', color: '#fff'},
    //     {img: 'images/Capture5.PNG', title: 'wikipedia search', id: 'wiki-viewer', color: '#092B40'},
    //     {img: 'images/Capture6.PNG', title: 'pomodoro clock', id: 'pomodoro-clock', color: '#2C3E50'},
    //     {img: 'images/Capture7.PNG', title: 'calculator', id: 'calculator', color: '#fff'}
    // ];
    $scope.projects = [
        {img: 'images/Capture.PNG', title: 'simon game', id: 'simon-game', color: '#fff'},
        {img: 'images/Capture1.PNG', title: 'tic tac toe game', id: 'tictactoe', color: '#162924'},
        {img: 'images/Capture2.PNG', title: 'quote generater', id: 'quotes', color: '#E74C3C'},
        {img: 'images/Capture3.PNG', title: 'twitch stream viewer', id: 'twitch-streams', color: '#fff'},
        {img: 'images/Capture5.PNG', title: 'wikipedia search', id: 'wiki-viewer', color: '#092B40'},
        {img: 'images/Capture4.PNG', title: 'weather app', id: 'weatherapp', color: '#0262B6'}
    ];

    $timeout(function(){
        console.log('gg');
        console.log($('.squares'));
        window.sr = ScrollReveal({
            reset: true
        });

        sr.reveal('.portfolio-header', {
            origin: 'top',
            viewFactor: .1,
            distance: '100px',
            opacity: 0,
            duration: 700,
            scale: .1,
            mobile: true
        })

        sr.reveal('.squares', {
            origin: 'left',
            viewFactor: .3,
            opacity: 0,
            duration: 700,
            scale: .1,
            mobile: true
        })

        sr.reveal('.project-card>h3', {
            origin: 'bottom',
            viewFactor: .01,
            distance: '50px',
            opacity: 0,
            delay: 300,
            duration: 800,
            mobile: true
        })
    }, 0);



}]);
