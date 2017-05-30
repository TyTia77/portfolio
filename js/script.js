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
    ];


    $scope.loaded = false;
    loadImage();

    $(document).on('mouseenter', '.hover-detail', function(){
        $(this).addClass('show');
    }).on('mouseleave', '.hover-detail', function(){
        $(this).removeClass('show');
    })

    // function loadImage(){
    //     var img = new Image();
    //     img.addEventListener('load', function(){
    //         $scope.loaded = true;
    //         console.log('fired');
    //     }, false);

        img.onload(function(){
            $scope.loaded = true;
            console.log('fired');
        });

        img.src = 'images/pic.jpg';
    }
}]);
