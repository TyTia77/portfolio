app.controller('projectCtrl', ['$scope', 'myService', 'api', ($scope, myService, api) => {

    // TODO $q group promises
    api.getProjects().then(function(response){
        $scope.projects = response.data;
    }, function(err){
        console.log(err);
    });

    api.getProjectCategory().then(function(response){
        $scope.category = response.data;
    }, function(err){
        console.log(err);
    });

    $scope.getImage = (img, color) => `background-image: url(${img}); background-color: ${color};`;

    $scope.convertButton = (value, applyDot) => myService.convertButton(value, applyDot);

    $scope.handleClick = e => myService.handleButton('.project-grid','.squares')(e)('btn-portfolio');
    
}]);