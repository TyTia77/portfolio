app.directive('projectItem', [ function(){
	// Runs during compile

	let template = `<div 
            class="col-xs-12 col-sm-6 col-md-4 squares" 
            ng-repeat="project in items"
            ng-class="service.convertButton(project.category, false)">

            <div class="project-card">
                <span></span>
                <span></span>
                <span></span>
                <div>&nbsp;</div>
                <div style="background-color: {{project.color}}">
                    <div class="project-image" ng-attr-style="{{service.getImage(project.img, project.color)}}">
                        <div class="hover-detail">
                            <h3>
                                <a href="https://github.com/TyTia77/{{project.source}}" target="_blank">
                                    <label
                                        ng-mouseover="handleHover($event)" 
                                        ng-mouseout="handleHover($event)">view source code</label></a></h3>
                            <h3>
                                <a href="https://tytia77.github.io/{{project.live}}" target="_blank">
                                    <label
                                        ng-mouseover="handleHover($event)" 
                                        ng-mouseout="handleHover($event)">view live</label></a></h3>
                            <h3 ng-show={{project.progress}}
                                style="color: red"
                                class="animated infinite flash">
                                    <ion-icon class="ion-alert-circled"></ion-icon>
                                    In Progress</h3>
                        </div>
                    </div>

                </div>

                <h3>{{project.title}}</h3>
            </div>
        </div>`;

    let controller = ['$scope', 'myService', 'hoverService', function(scope, myService, hoverSer){
        scope.service = myService;
        scope.handleHover = e => hoverSer.hover(e.currentTarget.classList, event.type, 2);
    }];

	return {
		scope: { items: '=' },
		controller: controller,
		restrict: 'E',
        template: template,
	};
}]);