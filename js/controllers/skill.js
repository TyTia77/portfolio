app.controller('skillCtrl', ['$scope', function($scope){

    $scope.items = [
        {label: 'HTML', scale: '.75', category: 'language'},
        {label: 'CSS', category: 'language'},
        {label: 'javascript', scale: '.8', category: 'language'},
        {label: 'SCSS', category: 'language'},
        {label: 'bootstrap', category: 'library'},
        {label: 'responsive', category: 'all'},
        {label: 'JQuery', scale: '.7', category: 'library'},
        {label: 'angularJS', category: 'framework'},
        {label: 'polymer', category: 'framework'},
        {label: 'NPM', category: 'package manager'},
        {label: 'gulp', category: 'build system'},
        {label: 'bower', category: 'package manager'},
        {label: 'git hub', scale: '.95', category: 'version control'},
        {label: 'bit bucket', category: 'version control'},
        {label: 'source tree', category: 'version control'},
    ];


    $scope.getStyle = function(value){
        value = value ? value +', ' +value : '1, 1';
        return 'transform: scale(' +value +')';
    }

    $scope.getImage = function(label){
        label = label.replace(' ', '').toLowerCase();
        return 'images/icons/' +label +'.png';
    }

    $scope.handleClick = function(ev){

        if (ev.target.classList.contains('btn-category')){
            var val = ev.target.innerHTML;

            $('.btn-category').removeClass('btn-danger');
            ev.target.classList.add('btn-danger');

            switch (val){
                case 'all':
                    $scope.filterList = '';
                    break;

                default:
                    $scope.filterList = val;
                    break;
            }
        }
    }

    $scope.testclick = function(e){
        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        var dataset = e.target.dataset.filter;

        if(dataset){
            console.log(e.target.dataset.filter);
            console.log($grid);
            console.log($(dataset));
            $grid.isotope({ filter: dataset });
        }
    }

}]);
