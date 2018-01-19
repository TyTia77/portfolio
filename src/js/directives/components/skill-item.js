app.directive('skillItem', [ function(){
	// Runs during compile

	let template = 
		`<div 
			class="col-xs-12 col-sm-6 col-md-4 col-lg-3 element-item"
    		ng-class="service.convertButton(i.category, false)"
    		ng-repeat="i in items | orderBy: 'label' | filter: filterList">
				<img
					ng-src="{{service.getImage(i.label)}}"
					style="{{service.getStyle(i.scale)}}"><h3>{{i.label}}</h3>
    	</div>`;

    let controller = ['$scope', 'myService', function(scope, myService){
    	scope.service = myService;
    }];

	return {
		scope          : { items: '=' },
		controller     : controller,
		restrict       : 'E',
        template       : template,
	};
}]);