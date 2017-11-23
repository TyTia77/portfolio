app.controller('projectCtrl', ['$scope', 'myService', (scope, myService) => {

    scope.items = myService.getProjectItems();
    scope.category = myService.getProjectCategory();

    scope.convertButton = (value, applyDot) => myService.convertButton(value, applyDot);
    scope.handleClick = e => myService.handleButton('.project-grid','.squares')(e)('btn-portfolio');
}]);