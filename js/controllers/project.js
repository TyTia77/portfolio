app.controller('projectCtrl', ['$scope', function($scope) {

    $scope.projects = [{
            img: 'images/project/simon-game.PNG',
            title: 'simon game',
            id: 'simon-game',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/movie-db.png',
            title: 'movieDB',
            id: 'movieDB/tree/issues',
            color: '#000',
            category: 'react',
            progress: true
        },
        {
            img: 'images/project/tic-tac-toe-game.PNG',
            title: 'tic tac toe game',
            id: 'tictactoe',
            color: '#162924',
            category: 'angularJS'
        },
        {
            img: 'images/project/weather-app.PNG',
            title: 'weather app',
            id: 'weatherapp',
            color: '#0262B6',
            category: 'angularJS'
        },
        {
            img: 'images/project/todo.png',
            title: 'todo app',
            id: 'todo',
            color: '#fff',
            category: 'react'
        },
        {
            img: 'images/project/wikipedia-search.PNG',
            title: 'wikipedia search',
            id: 'wiki-viewer',
            color: '#092B40',
            category: 'angularJS'
        },
        {
            img: 'images/project/twitch-stream-viewer.PNG',
            title: 'twitch stream viewer',
            id: 'twitch-streams',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/calculator.PNG',
            title: 'calculator',
            id: 'calculator',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/quote-generater.PNG',
            title: 'quote generater',
            id: 'quotes',
            color: '#E74C3C',
            category: 'angularJS'
        }
    ];

    $scope.category = [{
        name: 'react'
    },{
        name: 'angularJS'
    },{
        name: 'all'
    }]

    $scope.getImage = function(img, color) {
        return 'background-image: url(' + img + '); ' + 'background-color: ' + color;
    }

    $scope.convertButton = function(value, applyDot){
        console.log('conver',value);
        return value === 'all'
            ? '*'
            : applyDot
                ? '.' +value
                : value;
    }


    $scope.handleClick = function(e){
        var $grid = $('.project-grid').isotope({
            // options
            itemSelector: '.squares',
            layoutMode: 'fitRows'
        });

        var dataset = e.target.dataset.filter;

        console.log(dataset);

        if(dataset){

            // toggle active button state
            if (e.target.classList.contains('btn-portolio')){

                $('.btn-portolio').removeClass('btn-danger');
                e.target.classList.add('btn-danger');
            }

            $grid.isotope({ filter: dataset });
        }
    }

}]);