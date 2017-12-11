app.directive('buttonComp', [ function(){
	// Runs during compile

	let template = 
		`<div class="button-container button-group filter-button-group"
            ng-click="handleClick($event)">

            <button 
                class="btn {{classList[2]}} ng-class:{'btn-danger':$first}"
                ng-mouseover="handleHover($event)"
                ng-mouseout="handleHover($event)"
                data-filter="{{service.convertButton(i.category, true)}}"
                ng-repeat="i in items | unique: 'category' | orderBy: 'category'">{{i.category}}</button>
        </div>`;

    let controller = ['$scope', 'myService', function(scope, myService){
        scope.service = myService;
        
        scope.handleClick = e => myService.handleButton(scope.classList[0],scope.classList[1])(e)(scope.classList[2]);
        scope.handleHover = e => {

            // class list
            let cl = e.currentTarget.classList;

            let animation = ['animated', 'infinite', 'jello'];

            switch(event.type){
                case 'mouseover': 
                    cl.add.apply(cl, animation);
                    break;
                
                case 'mouseout':
                    cl.remove.apply(cl, animation);
                    break;
            }
        }
    }];

	return {
		scope: { items: '=', classList: '=' },
		controller: controller,
		restrict: 'E',
        template: template,
	};
}]);