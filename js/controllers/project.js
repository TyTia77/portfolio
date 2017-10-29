app.controller('projectCtrl', ['$scope', 'myService', ($scope, myService) => {

    $scope.projects = myService.getProjectItems();
    $scope.category = myService.getProjectCategory();

    $scope.getImage = (img, color) => `background-image: url(${img}); background-color: ${color};`;

    $scope.convertButton = (value, applyDot) => myService.convertButton(value, applyDot);

    $scope.handleClick = e => myService.handleButton('.project-grid','.squares')(e)('btn-portfolio');
    
}]);