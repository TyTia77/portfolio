app.controller('skillCtrl', ['$scope', 'myService', (scope, myService) => {
    scope.items     = myService.getSkillItems();
    scope.classList = ['.skill-grid', '.element-item', 'btn-skills'];
}]);
