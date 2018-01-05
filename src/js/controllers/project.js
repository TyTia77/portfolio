app.controller('projectCtrl', ['$scope', 'myService', (scope, myService) => {
    scope.items = myService.getProjectItems();
    scope.category = myService.getProjectCategory();
    scope.classList = ['.project-grid','.squares','btn-portfolio'];
}]);