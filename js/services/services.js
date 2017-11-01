app.factory('api', ['$http', function($http){
    var api = {};

    api.getProjects = function(){
        return $http.get('/data/projectItem.json');  
    }

    api.getProjectCategory = function(){
        return $http.get('/data/projectCat.json');
    }

    api.getSkillItem = function(){
        return $http.get('/data/skillItem.json');
    }

    return api;
}]);

app.service('myService',['api', function(api){
    this.skillItems = [
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
        {label: 'sub version', category: 'version control'},
        {label: 'photoshop', category: 'all'}
    ];


    // get data
    //this.getProjectItems = () => this.projectsItems;
    //this.getProjectCategory = () => this.projectCategory;
    this.getSkillItems = () => this.skillItems.filter(item => item.label !== 'photoshop');


    // functions
    this.convertButton = (value, applyDot) => {
    	return value === 'all'
            ? '*'
            : applyDot
                ? '.' +value.replace(' ', '-')
                : value.replace(' ', '-');
    }


    // events
    this.handleButton = (classArea, itemSelector) => {

        let $grid = $(classArea).isotope({
            // options
            itemSelector: itemSelector,
            layoutMode: 'fitRows'
        });

        return event => {

            let dataset = event.target.dataset.filter;

            return btnClass => {

                if(dataset){
                    // toggle active button state
                    if (event.target.classList.contains(btnClass)){

                        $(`.${btnClass}`).removeClass('btn-danger');
                        event.target.classList.add('btn-danger');
                    }

                    $grid.isotope({ filter: dataset });
                }
            }
        }
    }
}]);