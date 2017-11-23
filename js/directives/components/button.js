app.directive('buttonComp', [ function(){
	// Runs during compile

	let template = 
		`<div class="button-container button-group filter-button-group"
            ng-click="handleClick($event)">

            <button class="btn {{classList[2]}} ng-class:{'btn-danger':$first}"
                data-filter="{{service.convertButton(i.category, true)}}"
                ng-repeat="i in items | unique: 'category' | orderBy: 'category'">{{i.category}}</button>
        </div>`;

    let controller = ['$scope', 'myService', function(scope, myService){
    	scope.service = myService;

        scope.handleClick = e => myService.handleButton(scope.classList[0],scope.classList[1])(e)(scope.classList[2]);
    }];

	return {
		scope: { items: '=', classList: '=' },
		controller: controller,
		restrict: 'E',
        template: template,
	};
}]);