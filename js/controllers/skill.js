app.controller('skillCtrl', ['$scope', 'myService', (scope, myService) => {
    scope.items = myService.getSkillItems();
    scope.convertButton = (value, applyDot) => myService.convertButton(value, applyDot);
    scope.handleClick = e => {
        myService.handleButton('.skill-grid','.element-item')(e)('btn-skills');
    }
}]);
