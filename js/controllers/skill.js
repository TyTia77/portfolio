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
        {label: 'git', category: 'version control'},
        // {label: 'photoshop', category: 'all'},
        {label: 'sub version', category: 'version control'}
    ];

    $scope.convertButton = function(value, applyDot){
        if(value === 'all'){
            return '*';
            
        } else {
            value = value.replace(' ', '-');

            return applyDot 
                ? '.' +value 
                : value;
        }
    }

    $scope.getStyle = function(value){

        // if scale prop valid, else return standard scale of 1,1
        value = value ? value +', ' +value : '1, 1';
        return 'transform: scale(' +value +')';
    }

    $scope.getImage = function(label){
        label = label.replace(' ', '').toLowerCase();
        return 'images/icons/' +label +'.png';
    }

    $scope.handleClick = function(e){
        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        var dataset = e.target.dataset.filter;

        if(dataset){

            // toggle active button state
            if (e.target.classList.contains('btn-category')){

                $('.btn-category').removeClass('btn-danger');
                e.target.classList.add('btn-danger');
            }

            $grid.isotope({ filter: dataset });
        }
    }

}]);
