app.controller('skillCtrl', ['$scope', 'myService', ($scope, myService) => {

    $scope.items = myService.getSkillItems();

    $scope.convertButton = (value, applyDot) => myService.convertButton(value, applyDot);

    $scope.getStyle = value => {

        // if scale prop valid, else return standard scale of 1,1
        value = value 
            ? `${value},${value}`
            : `1, 1`;
        return `transform: scale(${value})`;
    }

    $scope.getImage = label => {
        label = label.replace(' ', '').toLowerCase();
        return `images/icons/${label}.png`;
    }

    $scope.handleClick = e => myService.handleButton('.skill-grid','.element-item')(e)('btn-skills');

}]);
