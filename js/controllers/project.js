app.controller('projectCtrl', ['$scope', function($scope){
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
        {img: 'images/project/simon-game.PNG', title: 'simon game', id: 'simon-game', color: '#fff'},
        {img: 'images/project/tic-tac-toe-game.PNG', title: 'tic tac toe game', id: 'tictactoe', color: '#162924'},
        {img: 'images/project/calculator.PNG', title: 'calculator', id: 'calculator', color: '#fff'},
        {img: 'images/project/quote-generater.PNG', title: 'quote generater', id: 'quotes', color: '#E74C3C'},
        {img: 'images/project/twitch-stream-viewer.PNG', title: 'twitch stream viewer', id: 'twitch-streams', color: '#fff'},
        {img: 'images/project/wikipedia-search.PNG', title: 'wikipedia search', id: 'wiki-viewer', color: '#092B40'},
        {img: 'images/project/weather-app.PNG', title: 'weather app', id: 'weatherapp', color: '#0262B6'},
        {img: 'images/project/todo.png', title: 'todo app', id: 'todo', color: '#fff'},
        {img: 'images/project/movie-db.png', title: 'movieDB', id: 'movieDB', color: '#000', progress: true }
    ];

    $scope.getImage = function(img, color){
        return 'background-image: url(' +img +'); ' +'background-color: ' +color;
    }

}]);
