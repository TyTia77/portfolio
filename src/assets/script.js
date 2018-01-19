'use strict';

// $(document).on('click', 'ul li', function(e){
//     var hash = $(this).children('a').attr('href');
//     console.log(event);
//     e.preventDefault();
//     e.stopPropagation();
//     $('html, body').animate({
//         'scrollTop': $(hash).offset().top
//     }, 700);
//     // return false;
// });
$(window).scroll(function () {
    var scrollpos = $(document).scrollTop();
    var backcolor = scrollpos > 100 ? 'rgba(0,0,0,.8)' : 'rgba(255,255,255,0)';
    $('.navbar').css({ 'background-color': backcolor });

    if (scrollpos > 1) {
        $('main span[id]').each(function (i) {
            if ($(this).position().top <= scrollpos + 10) {
                $('ul li.active').removeClass('active');
                $('ul li').eq(i).addClass('active');
            }
        });
    } else {
        $('ul li.active').removeClass('active');
        $('ul li:first').addClass('active');
    }
});
'use strict';

$(document).ready(function () {

    // check if mobile or tablet device
    window.mobileAndTabletcheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    if (mobileAndTabletcheck()) {

        $(document).on('click touchstart', 'body', function () {
            $('.hover-detail').removeClass('show');
            $('.hover-detail').children('h3').children('a').css('pointer-events', 'none');
        });

        $(document).on('click touchstart', '.hover-detail', function (e) {
            e.stopPropagation();
            var scrollPosStart = $(document).scrollTop();

            $(document).on('click touchend', '.hover-detail', function (e) {
                var scrollPosEnd = $(document).scrollTop();

                if (scrollPosStart === scrollPosEnd) {
                    $(this).addClass('show');
                    $(this).children('h3').children('a').css('pointer-events', 'all');
                }
            });
        });
    } else {
        var target = '.project-image';
        var child = '.hover-detail';
        var animateClass = 'show';

        $(document).on('mouseenter', target, function () {
            $(this).children(child).addClass(animateClass).css('pointer-events', 'all');
        }).on('mouseleave', target, function () {
            $(this).children(child).removeClass(animateClass).css('pointer-events', 'none');
        });
    }
});
'use strict';

// put scrollreveal on global scope
window.sr = ScrollReveal({
    reset: true
});

// on refresh scroll to top
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

// disable scrolling
setTimeout(function () {
    $('body').css('overflow-y', 'visible');
}, 7000);

var app = angular.module('app', ['angular.filter']);

// global controller
app.controller('ctrl', ['$scope', function ($scope) {}]);
"use strict";

app.service("hoverService", function () {

    this.hover = function (classList, eventType, listNo) {

        //more list @ https://daneden.github.io/animate.css/
        var list = ["tada", "jello", "rubberBand"];
        var animation = ["animated", "infinite", list[listNo]];

        switch (eventType) {
            case "mouseover":
                classList.add.apply(classList, animation);
                break;

            case "mouseout":
                classList.remove.apply(classList, animation);
                break;
        }
    };
});
'use strict';

app.service('myService', function () {
    var _this = this;

    // data
    this.projectsItems = [{
        category: 'angularJS',
        color: '#fff',
        img: 'images/project/simon-game.PNG',
        live: 'simon-game',
        source: 'simon-game',
        title: 'simon game'
    }, {
        category: 'react',
        color: '#000',
        img: 'images/project/movie-db.png',
        live: 'movieDB',
        progress: true,
        source: 'movieDB/tree/trunk',
        title: 'movieDB'
    }, {
        category: 'angularJS',
        color: '#162924',
        img: 'images/project/tic-tac-toe-game.PNG',
        live: 'tictactoe',
        source: 'tictactoe',
        title: 'tic tac toe game'
    }, {
        category: 'angularJS',
        color: '#0262B6',
        img: 'images/project/weather-app.PNG',
        live: 'weatherapp',
        source: 'weatherapp',
        title: 'weather app'
    }, {
        category: 'react',
        color: '#fff',
        img: 'images/project/todo.png',
        live: 'todo',
        source: 'todo/tree/trunk',
        title: 'todo app'
    }, {
        category: 'angularJS',
        color: '#092B40',
        img: 'images/project/wikipedia-search.PNG',
        live: 'wiki-viewer',
        source: 'wiki-viewer',
        title: 'wikipedia search'
    }, {
        category: 'angularJS',
        color: '#fff',
        img: 'images/project/twitch-stream-viewer.PNG',
        live: 'twitch-streams',
        source: 'twitch-streams',
        title: 'twitch stream viewer'
    }, {
        category: 'angularJS',
        color: '#fff',
        img: 'images/project/calculator.PNG',
        live: 'calculator',
        source: 'calculator',
        title: 'calculator'
    }, {
        category: 'angularJS',
        color: '#E74C3C',
        img: 'images/project/quote-generater.PNG',
        live: 'quotes',
        source: 'quotes',
        title: 'quote generater'
    }];

    this.projectCategory = [{ category: 'react' }, { category: 'angularJS' }, { category: 'all' }];

    this.skillItems = [{ label: 'angularJS', category: 'framework' }, { label: 'bit bucket', category: 'version control' }, { label: 'bootstrap', category: 'library' }, { label: 'bower', category: 'package manager' }, { label: 'CSS', category: 'language' }, { label: 'git hub', scale: '.95', category: 'version control' }, { label: 'git', category: 'version control' }, { label: 'gulp', category: 'build system' }, { label: 'HTML', scale: '.75', category: 'language' }, { label: 'javascript', scale: '.8', category: 'language' }, { label: 'JQuery', scale: '.7', category: 'library' }, { label: 'NPM', category: 'package manager' }, { label: 'photoshop', category: 'all' }, { label: 'polymer', category: 'framework' }, { label: 'responsive', category: 'all' }, { label: 'SCSS', category: 'language' }, { label: 'source tree', category: 'version control' }, { label: 'sub version', category: 'version control' }];

    // get
    this.getProjectItems = function () {
        return _this.projectsItems;
    };
    this.getProjectCategory = function () {
        return _this.projectCategory;
    };
    this.getSkillItems = function () {
        return _this.skillItems.filter(function (item) {
            return item.label !== 'photoshop';
        });
    };
    this.getImage = function (img, color) {
        return color ? 'background-image: url(' + img + '); background-color: ' + color + ';' : 'images/icons/' + img.replace(' ', '').toLowerCase() + '.png';
    };
    this.getStyle = function (value) {
        // if scale prop valid, else return standard scale of 1,1
        value = value ? value + ',' + value : '1, 1';
        return 'transform: scale(' + value + ')';
    };

    // functions
    this.convertButton = function (value, applyDot) {
        return value === 'all' ? '*' : applyDot ? '.' + value.replace(' ', '-') : value.replace(' ', '-');
    };

    // events
    this.handleButton = function (classArea, itemSelector) {

        var $grid = $(classArea).isotope({
            // options
            itemSelector: itemSelector,
            layoutMode: 'fitRows'
        });

        return function (event) {

            var dataset = event.target.dataset.filter;

            return function (btnClass) {

                if (dataset) {
                    // toggle active button state
                    if (event.target.classList.contains(btnClass)) {

                        $('.' + btnClass).removeClass('btn-danger');
                        event.target.classList.add('btn-danger');
                    }

                    $grid.isotope({ filter: dataset });
                }
            };
        };
    };
});
'use strict';

app.directive('scrollEffect', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function link() {
            $timeout(function () {
                sr.reveal('.portfolio-header', {
                    distance: '100px',
                    duration: 700,
                    mobile: true,
                    opacity: 0,
                    origin: 'top',
                    reset: false,
                    scale: .1,
                    viewFactor: .1
                });

                sr.reveal('.portfolio-container .line', {
                    duration: 2000,
                    mobile: true,
                    opacity: 0,
                    origin: 'center',
                    reset: false,
                    rotate: { x: 0, y: 90, z: 0 },
                    scale: 0.1,
                    viewFactor: .1
                });

                sr.reveal('.project-grid', {
                    duration: 700,
                    mobile: true,
                    opacity: 0,
                    origin: 'left',
                    reset: false,
                    scale: .1,
                    viewFactor: .1
                });
            }, 0);
        }
    };
}]);
'use strict';

app.directive('skillLoad', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function link() {
            $timeout(function () {
                sr.reveal('.skill-container>h1', {
                    distance: '100px',
                    duration: 700,
                    mobile: true,
                    opacity: 0,
                    origin: 'top',
                    reset: false,
                    scale: .1,
                    viewFactor: .1
                });

                sr.reveal('.skill-container .line', {
                    duration: 2000,
                    mobile: true,
                    opacity: 0,
                    origin: 'center',
                    reset: false,
                    rotate: { x: 0, y: 90, z: 0 },
                    scale: 0.1,
                    viewFactor: .1
                });

                sr.reveal('.button-container', {
                    distance: '100px',
                    duration: 700,
                    mobile: true,
                    opacity: 0,
                    origin: 'bottom',
                    reset: false,
                    scale: .1,
                    viewFactor: .1
                });

                sr.reveal('.skill-row', {
                    distance: '100px',
                    duration: 700,
                    mobile: true,
                    opacity: 0,
                    origin: 'bottom',
                    reset: false,
                    scale: .1,
                    viewFactor: .1
                });
            });
        }
    };
}]);
"use strict";

app.directive('buttonComp', [function () {
  // Runs during compile

  var template = "<div class=\"button-container button-group filter-button-group\"\n            ng-click=\"handleClick($event)\">\n\n            <button \n                class=\"btn {{classList[2]}} ng-class:{'btn-danger':$first}\"\n                ng-mouseover=\"handleHover($event)\"\n                ng-mouseout=\"handleHover($event)\"\n                data-filter=\"{{service.convertButton(i.category, true)}}\"\n                ng-repeat=\"i in items | unique: 'category' | orderBy: 'category'\">{{i.category}}</button>\n        </div>";

  var controller = ["$scope", "myService", "hoverService", function (scope, myService, hoverSer) {
    scope.service = myService;
    scope.handleClick = function (e) {
      return myService.handleButton(scope.classList[0], scope.classList[1])(e)(scope.classList[2]);
    };
    scope.handleHover = function (e) {
      return hoverSer.hover(e.currentTarget.classList, event.type, 1);
    };
  }];

  return {
    scope: { items: '=', classList: '=' },
    controller: controller,
    restrict: 'E',
    template: template
  };
}]);
'use strict';

app.directive('projectItem', [function () {
    // Runs during compile

    var template = '<div \n            class="col-xs-12 col-sm-6 col-md-4 squares" \n            ng-repeat="project in items"\n            ng-class="service.convertButton(project.category, false)">\n\n            <div class="project-card">\n                <span></span>\n                <span></span>\n                <span></span>\n                <div>&nbsp;</div>\n                <div style="background-color: {{project.color}}">\n                    <div class="project-image" ng-attr-style="{{service.getImage(project.img, project.color)}}">\n                        <div class="hover-detail">\n                            <h3>\n                                <a href="https://github.com/TyTia77/{{project.source}}" target="_blank">\n                                    <label\n                                        ng-mouseover="handleHover($event)" \n                                        ng-mouseout="handleHover($event)">view source code</label></a></h3>\n                            <h3>\n                                <a href="https://tytia77.github.io/{{project.live}}" target="_blank">\n                                    <label\n                                        ng-mouseover="handleHover($event)" \n                                        ng-mouseout="handleHover($event)">view live</label></a></h3>\n                            <h3 ng-show={{project.progress}}\n                                style="color: red"\n                                class="animated infinite flash">\n                                    <ion-icon class="ion-alert-circled"></ion-icon>\n                                    In Progress</h3>\n                        </div>\n                    </div>\n\n                </div>\n\n                <h3>{{project.title}}</h3>\n            </div>\n        </div>';

    var controller = ['$scope', 'myService', 'hoverService', function (scope, myService, hoverSer) {
        scope.service = myService;
        scope.handleHover = function (e) {
            return hoverSer.hover(e.currentTarget.classList, event.type, 2);
        };
    }];

    return {
        scope: { items: '=' },
        controller: controller,
        restrict: 'E',
        template: template
    };
}]);
'use strict';

app.directive('skillItem', [function () {
	// Runs during compile

	var template = '<div \n\t\t\tclass="col-xs-12 col-sm-6 col-md-4 col-lg-3 element-item"\n    \t\tng-class="service.convertButton(i.category, false)"\n    \t\tng-repeat="i in items | orderBy: \'label\' | filter: filterList">\n\t\t\t\t<img\n\t\t\t\t\tng-src="{{service.getImage(i.label)}}"\n\t\t\t\t\tstyle="{{service.getStyle(i.scale)}}"><h3>{{i.label}}</h3>\n    \t</div>';

	var controller = ['$scope', 'myService', function (scope, myService) {
		scope.service = myService;
	}];

	return {
		scope: { items: '=' },
		controller: controller,
		restrict: 'E',
		template: template
	};
}]);
'use strict';

app.controller('projectCtrl', ['$scope', 'myService', function (scope, myService) {
    scope.items = myService.getProjectItems();
    scope.category = myService.getProjectCategory();
    scope.classList = ['.project-grid', '.squares', 'btn-portfolio'];
}]);
'use strict';

app.controller('skillCtrl', ['$scope', 'myService', function (scope, myService) {
    scope.items = myService.getSkillItems();
    scope.classList = ['.skill-grid', '.element-item', 'btn-skills'];
}]);